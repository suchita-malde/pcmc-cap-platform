-- PCMC CAP Platform — MySQL schema mapped to the extracted JSON data
-- Only tables justified by actual extracted content are included.

CREATE TABLE sources (
  source_id     VARCHAR(10) PRIMARY KEY,        -- 'DOC_A', 'DOC_B'
  document_name VARCHAR(255) NOT NULL,
  doc_type      VARCHAR(100),
  total_pages   INT,
  file_name     VARCHAR(255),
  notes         TEXT
);

CREATE TABLE general_cap_info (
  id            INT PRIMARY KEY AUTO_INCREMENT,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  value         DECIMAL(15,2) NULL,
  unit          VARCHAR(50),
  year          YEAR NULL,
  source_id     VARCHAR(10),
  source_page   VARCHAR(30),
  source_section VARCHAR(255),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE sectors (
  sector_id       INT PRIMARY KEY AUTO_INCREMENT,
  name            VARCHAR(100) NOT NULL UNIQUE,
  slug            VARCHAR(100) NOT NULL UNIQUE,
  overview        TEXT,
  current_situation TEXT,
  source_id       VARCHAR(10),
  source_pages    VARCHAR(30),
  source_section  VARCHAR(100),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE sector_baseline_data (      -- the "baseline_data" arrays per sector JSON
  id          INT PRIMARY KEY AUTO_INCREMENT,
  sector_id   INT NOT NULL,
  metric      VARCHAR(255) NOT NULL,
  value       VARCHAR(50),               -- kept as string: some source values are ranges e.g. "10-12"
  unit        VARCHAR(50),
  year        VARCHAR(10),
  source_page VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id)
);

CREATE TABLE challenges (
  challenge_id  INT PRIMARY KEY AUTO_INCREMENT,
  sector_id     INT NOT NULL,
  description   TEXT NOT NULL,
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id)
);

CREATE TABLE climate_risks (
  risk_id       INT PRIMARY KEY AUTO_INCREMENT,
  sector_id     INT NULL,                -- nullable: some risks are city-wide, not sector-specific
  description   TEXT NOT NULL,
  source_id     VARCHAR(10),
  source_page   VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE existing_initiatives (       -- doubles as Task 9 "initiatives" table
  initiative_id INT PRIMARY KEY AUTO_INCREMENT,
  name          VARCHAR(255) NOT NULL,
  sector_id     INT NULL,                 -- nullable: some initiatives span 2 sectors (stored as free text sector_note if so)
  sector_note   VARCHAR(255),
  description   TEXT,
  status        VARCHAR(255) NULL,        -- free text; source rarely gives clean enum status
  capacity      VARCHAR(100) NULL,
  target_value  VARCHAR(100) NULL,
  target_year   YEAR NULL,
  location      VARCHAR(255) NULL,
  source_id     VARCHAR(10),
  source_page   VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE strategies (
  strategy_id   INT PRIMARY KEY AUTO_INCREMENT,
  sector_id     INT NOT NULL,
  code          VARCHAR(20) NOT NULL UNIQUE,   -- e.g. 'BE-1', 'WWM-3'
  sub_sector    VARCHAR(100) NULL,             -- used only for Water Resource Management (WSM/WWM/UD groups)
  name          TEXT NOT NULL,
  source_page   VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id)
);

CREATE TABLE actions (
  action_id         INT PRIMARY KEY AUTO_INCREMENT,
  strategy_id       INT NOT NULL,
  action_code       VARCHAR(20) NOT NULL UNIQUE,   -- e.g. 'BE-1-1'
  action_title      VARCHAR(255) NULL,             -- NULL until manually cleaned from action_description
  action_description TEXT NOT NULL,                -- verbatim extracted text (table cell ordering as in source)
  target_value      DECIMAL(15,2) NULL,
  target_unit       VARCHAR(50) NULL,
  target_year       YEAR NULL,
  baseline_value    DECIMAL(15,2) NULL,
  baseline_unit     VARCHAR(50) NULL,
  output_text       TEXT,
  outcome_text      TEXT,
  source_id         VARCHAR(10),
  source_page       VARCHAR(30),
  needs_manual_qa   BOOLEAN DEFAULT TRUE,          -- flips to FALSE once a human has cleaned title/stakeholders/target
  FOREIGN KEY (strategy_id) REFERENCES strategies(strategy_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE action_stakeholders (
  action_id         INT NOT NULL,
  stakeholder_name  VARCHAR(255) NOT NULL,
  PRIMARY KEY (action_id, stakeholder_name),
  FOREIGN KEY (action_id) REFERENCES actions(action_id)
);

CREATE TABLE progress_indicators (
  indicator_id      INT PRIMARY KEY AUTO_INCREMENT,
  sector_id         INT NOT NULL,
  action_id         INT NULL,
  indicator         VARCHAR(255) NOT NULL,
  baseline_value    DECIMAL(15,2) NULL,
  baseline_unit     VARCHAR(50),
  target_value      DECIMAL(15,2) NULL,
  target_unit       VARCHAR(50),
  target_year       YEAR NULL,
  current_value     DECIMAL(15,2) NULL,           -- NULL unless admin/PCMC supplies an update
  current_value_unit VARCHAR(100),
  status            VARCHAR(100),                  -- free text status note, not a rigid enum (source data too inconsistent)
  source_id         VARCHAR(10),
  source_page       VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (action_id) REFERENCES actions(action_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE statistics (
  stat_id       INT PRIMARY KEY AUTO_INCREMENT,
  metric        VARCHAR(255) NOT NULL,
  value         DECIMAL(20,4) NULL,
  unit          VARCHAR(100),
  year          VARCHAR(10),
  description   TEXT,
  sector_id     INT NULL,
  source_id     VARCHAR(10),
  source_page   VARCHAR(30),
  source_section VARCHAR(255),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE citizen_actions (
  citizen_action_id INT PRIMARY KEY AUTO_INCREMENT,
  sector_id         INT NOT NULL,
  title             VARCHAR(255) NOT NULL,
  description       TEXT,
  source_id         VARCHAR(10),
  source_page       VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE vendors (                    -- schema only — zero rows populated, per Task 7 findings
  vendor_id            INT PRIMARY KEY AUTO_INCREMENT,
  name                 VARCHAR(255) NOT NULL,
  category             VARCHAR(100),
  sector_id            INT NULL,
  description          TEXT,
  service              VARCHAR(255),
  location             VARCHAR(255),
  contact_person       VARCHAR(150) NULL,
  phone                VARCHAR(30) NULL,
  email                VARCHAR(150) NULL,
  website              VARCHAR(255) NULL,
  address              TEXT NULL,
  verification_status  VARCHAR(30) DEFAULT 'To be verified',
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id)
);

CREATE TABLE infrastructure (              -- GIS-relevant named items, coordinates NULL until verified GIS source exists
  infra_id            INT PRIMARY KEY AUTO_INCREMENT,
  name                VARCHAR(255) NOT NULL,
  type                VARCHAR(100),
  sector_id           INT NULL,
  description         TEXT,
  location_text       VARCHAR(255),
  latitude            DECIMAL(9,6) NULL,
  longitude           DECIMAL(9,6) NULL,
  geometry_available  BOOLEAN DEFAULT FALSE,
  source_id           VARCHAR(10),
  source_page         VARCHAR(30),
  FOREIGN KEY (sector_id) REFERENCES sectors(sector_id),
  FOREIGN KEY (source_id) REFERENCES sources(source_id)
);
