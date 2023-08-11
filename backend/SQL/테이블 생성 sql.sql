CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    nickname VARCHAR(255),
    number BIGINT
);


-- dict 테이블 생성
CREATE TABLE IF NOT EXISTS dict (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    spices VARCHAR(255),
    lifespan VARCHAR(255),
    feed VARCHAR(255),
    feed_cycle VARCHAR(255),
    temp VARCHAR(255),
    lighting VARCHAR(255),
    humidity VARCHAR(255),
    info TEXT,
    environment TEXT,
    home TEXT,
    img VARCHAR(255)
);

-- cage 테이블 생성
CREATE TABLE IF NOT EXISTS cage (
    cage_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id BIGINT,
    cage_name VARCHAR(255),
    set_temp BIGINT,
    set_hum BIGINT,
    set_uv BIGINT,
    created_at DATETIME,
    category VARCHAR(255),
    CONSTRAINT fk_cage_user FOREIGN KEY (id) REFERENCES users (id)
);

-- store 테이블 생성
CREATE TABLE IF NOT EXISTS store (
    store_storeid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    item VARCHAR(255),
    url VARCHAR(255),
    price INT,
    photo VARCHAR(255)
);

-- Alarm 테이블 생성
CREATE TABLE IF NOT EXISTS Alarm (
    arm_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cage_id BIGINT,
    name VARCHAR(255) NOT NULL,
    cycle DATETIME NOT NULL,
    recent DATETIME NOT NULL,
    CONSTRAINT fk_alarm_cage FOREIGN KEY (cage_id) REFERENCES cage (cage_id)
);

-- Animal 테이블 생성
CREATE TABLE IF NOT EXISTS Animal (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cage_id BIGINT,
    dict_id BIGINT,
    name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birth DATE,
    issue TEXT,
    created_at DATETIME NOT NULL,
    photo VARCHAR(255),
    CONSTRAINT fk_animal_cage FOREIGN KEY (cage_id) REFERENCES cage (cage_id),
    CONSTRAINT fk_animal_dict FOREIGN KEY (dict_id) REFERENCES dict (id)
);

-- auto_set 테이블 생성
CREATE TABLE IF NOT EXISTS auto_set (
    set_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cage_id BIGINT,
    time TIME,
    set_temp BIGINT,
    set_hum BIGINT,
    set_uv BIGINT,
    CONSTRAINT fk_auto_set_cage FOREIGN KEY (cage_id) REFERENCES cage (cage_id)
);