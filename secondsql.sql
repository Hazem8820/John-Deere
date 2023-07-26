-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 01:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `secondsql`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` varchar(400) NOT NULL,
  `User_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`, `User_id`) VALUES
(10, 'let\'s run togther', 'I need to buy a dog I\'m so lonely.', 3),
(13, 'going to eat', 'I\'m so hungry, I need some food ', 2),
(14, 'Do what you love', 'Keeping busy with menial tasks and other day to day activities can become exhausting. Staying busy with activities that are meaningful to you', 9),
(15, 'Pursue a hobby', 'You probably have at least one hobby in your life that you really enjoy, if not more. Concentrate on one or two of them. Become an expert! If you', 6),
(16, 'Focus on a project', 'If you’re in the middle of a work or school project that you’re enjoying, really throw yourself into honing your skills and making it a success', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`) VALUES
(2, 'hazem', 'hazem@gmail.com', '2516', 36),
(3, 'walled', 'Walled@gmail.com', '010188', 26),
(4, 'sameh', 'sameh@gmail.com', '5455', 62),
(5, 'wezza', 'ezz@gmail.com', '000000032', 15),
(6, 'khaled', 'khaled@gmail.com', '\r\n3216581', 30),
(7, 'gamal', 'gamal@gmail.com', '\r\n251651', 61),
(8, 'farouq', 'farouq@gmail.com', '16511681', 50),
(9, 'omar', 'omar@gmail.com', '56186161', 18),
(11, 'Peter', 'peter@gmail.com', '1864', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Demo` (`User_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `Demo` FOREIGN KEY (`User_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
