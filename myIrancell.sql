-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2023 at 08:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myIrancell`
--

-- --------------------------------------------------------

--
-- Table structure for table `recommend_packet`
--

CREATE TABLE `recommend_packet` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `off` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `max_date` varchar(100) NOT NULL,
  `userID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `recommend_packet`
--

INSERT INTO `recommend_packet` (`id`, `title`, `off`, `price`, `max_date`, `userID`) VALUES
(1, 'بسته مکالمه ۱۲ ساعته', 20, 120, 'تا آخر شهریور ماه ۱۴۰۱', 1),
(2, 'بسته اینترنت یکساله', 20, 120, 'تا آخر شهریور ماه ۱۴۰۲', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(100) NOT NULL,
  `buy_date` varchar(100) NOT NULL,
  `max_date` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `off` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `userID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `buy_date`, `max_date`, `title`, `off`, `price`, `userID`) VALUES
(1, '۱۲ خرداد', '۱۲ شهریور', 'بسته مکالمه ۱۰ روزه', 10, 90000, 1),
(2, '۳۰ تیر', '۳۰ مرداد', 'بسته اینترنت ۶۰ روزه', 10, 150000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `max_date` varchar(100) NOT NULL,
  `isActive` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon`, `title`, `max_date`, `isActive`) VALUES
(1, '/img/icons/icon1.svg', 'بسته مکالمه ۱۰ روزه', 'تا تاریخ ۱۲ مرداد ۱۴۰۱', 0),
(2, '/img/icons/icon2.svg', 'بسته اینترنت ۱۰ روزه', 'تا تاریخ ۱۲ شهریور ۱۴۰۱', 1),
(3, '/img/icons/icon2.svg', 'بسته sms ۱۰ روزه', 'تا تاریخ ۱۲ شهریور ۱۴۰۲', 1),
(4, '/img/icons/icon1.svg', 'بسته درون شبکه', 'تا تاریخ ۱۲ مرداد ۱۴۰۱', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `profile` varchar(100) NOT NULL,
  `charge` int(100) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `profile`, `charge`, `phone`, `token`) VALUES
(1, 'مهدی', 'عبداللهی', '/img/mahdi.jpg', 3000, 9194354292, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'),
(2, 'محمدامین', 'سعیدی راد', '/img/amin.jpg', 4000, 99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ10'),
(3, 'پرهام', 'کریمی', '/img/karimi.jpg', 9000, 98, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recommend_packet`
--
ALTER TABLE `recommend_packet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recommend_packet`
--
ALTER TABLE `recommend_packet`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recommend_packet`
--
ALTER TABLE `recommend_packet`
  ADD CONSTRAINT `recommend_packet_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
