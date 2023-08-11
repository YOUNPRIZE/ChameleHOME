-- 더미 데이터 삽입
-- users 테이블에 데이터 삽입
INSERT INTO users (userId, password, nickname, number) 
VALUES
    ('FRONT', '1234', 'User 1', 1234567890),
    ('user1', 'password1', 'User 2', 9876543210),
    ('user2', 'password2', 'User 3', 5555555555),
    ('user3', 'password3', 'User 4', 1231231230),
    ('user4', 'password4', 'User 5', 9879879870);

-- 나머지 테이블에 데이터 삽입
-- dict 테이블에 데이터 삽입
INSERT INTO dict (spices, lifespan, feed, feed_cycle, temp, lighting, humidity, info, environment, home, img)
VALUES
    ('Species 1', '5 years', 'Feed Type 1', 'Twice a day', '25-30°C', '12-14 hours', '60-70%', 'Species 1 Info', 'Indoor', 'Terrarium', 'species1.jpg'),
    ('Species 2', '3 years', 'Feed Type 2', 'Once a day', '22-28°C', '10-12 hours', '50-60%', 'Species 2 Info', 'Outdoor', 'Habitat', 'species2.jpg'),
    ('Species 3', '7 years', 'Feed Type 3', 'Every other day', '28-32°C', '14-16 hours', '70-80%', 'Species 3 Info', 'Indoor', 'Cage', 'species3.jpg'),
    ('Species 4', '4 years', 'Feed Type 4', 'Three times a week', '20-25°C', '8-10 hours', '40-50%', 'Species 4 Info', 'Outdoor', 'Terrarium', 'species4.jpg'),
    ('Species 5', '6 years', 'Feed Type 5', 'Once a week', '22-27°C', '11-13 hours', '55-65%', 'Species 5 Info', 'Indoor', 'Habitat', 'species5.jpg');

-- cage 테이블에 데이터 삽입
INSERT INTO cage (id, cage_name, set_temp, set_hum, set_uv, created_at, category)
VALUES
    (1, 'Cage 1', 25, 60, 8, NOW(), 'Category A'),
    (2, 'Cage 2', 23, 55, 6, NOW(), 'Category B'),
    (3, 'Cage 3', 28, 70, 9, NOW(), 'Category C'),
    (4, 'Cage 4', 22, 50, 7, NOW(), 'Category A'),
    (5, 'Cage 5', 26, 65, 5, NOW(), 'Category B');

-- store 테이블에 데이터 삽입
INSERT INTO store (name, item, url, price, photo)
VALUES
    ('Store Item 1', 'Item Description 1', 'https://example.com/item1', 1000, 'item1.jpg'),
    ('Store Item 2', 'Item Description 2', 'https://example.com/item2', 1500, 'item2.jpg'),
    ('Store Item 3', 'Item Description 3', 'https://example.com/item3', 2000, 'item3.jpg'),
    ('Store Item 4', 'Item Description 4', 'https://example.com/item4', 2500, 'item4.jpg'),
    ('Store Item 5', 'Item Description 5', 'https://example.com/item5', 3000, 'item5.jpg');

-- Alarm 테이블에 데이터 삽입
INSERT INTO Alarm (cage_id, name, cycle, recent)
VALUES
    (1, 'Alarm 1', NOW(), NOW()),
    (2, 'Alarm 2', NOW(), NOW()),
    (3, 'Alarm 3', NOW(), NOW()),
    (4, 'Alarm 4', NOW(), NOW()),
    (5, 'Alarm 5', NOW(), NOW());

-- Animal 테이블에 데이터 삽입
INSERT INTO Animal (cage_id, dict_id, name, gender, birth, issue, created_at, photo)
VALUES
    (1, 1, 'Animal 1', 'Male', '2023-01-01', 'Health Issue 1', NOW(), 'animal1.jpg'),
    (2, 2, 'Animal 2', 'Female', '2022-05-15', 'Health Issue 2', NOW(), 'animal2.jpg'),
    (3, 3, 'Animal 3', 'Male', '2020-10-10', 'Health Issue 3', NOW(), 'animal3.jpg'),
    (4, 4, 'Animal 4', 'Female', '2021-03-25', 'Health Issue 4', NOW(), 'animal4.jpg'),
    (5, 5, 'Animal 5', 'Male', '2023-02-28', 'Health Issue 5', NOW(), 'animal5.jpg');

-- auto_set 테이블에 데이터 삽입
INSERT INTO auto_set (cage_id, time, set_temp, set_hum, set_uv)
VALUES
    (1, '09:00:00', 25, 60, 3),
    (2, '12:00:00', 28, 65, 5),
    (3, '15:00:00', 26, 63, 4),
    (4, '09:00:00', 22, 58, 2),
    (5, '12:00:00', 24, 62, 3);
