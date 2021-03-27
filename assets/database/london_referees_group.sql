-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 26, 2021 at 10:54 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `london_referees_group`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events`
--

DROP TABLE IF EXISTS `tbl_events`;
CREATE TABLE IF NOT EXISTS `tbl_events` (
  `events_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `events_name` varchar(200) NOT NULL,
  `events_subject` text NOT NULL,
  `events_creator` varchar(250) NOT NULL,
  `last_executed` timestamp NOT NULL,
  `events_file` varchar(300) NOT NULL,
  PRIMARY KEY (`events_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_events`
--

INSERT INTO `tbl_events` (`events_id`, `events_name`, `events_subject`, `events_creator`, `last_executed`, `events_file`) VALUES
(1, 'OHF_Criminal_Declaration_Form', 'This is Criminal Declaration Form for all members', 'admin', '2021-03-25 15:37:06', 'OHF_Criminal_Declaration_Form.pdf'),
(13, 'LRG_Bylaws', 'LRG_Bylaws', 'admin', '2021-03-27 02:38:09', 'LRG_Bylaws_March_21__2017.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `user_level` varchar(2) NOT NULL DEFAULT '0',
  `user_name` varchar(250) NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_lname` varchar(250) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_ip` varchar(50) DEFAULT NULL,
  `user_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `login_times` int(11) DEFAULT '0',
  `user_status` varchar(20) NOT NULL DEFAULT 'unlocked',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_level`, `user_name`, `user_fname`, `user_lname`, `user_password`, `user_email`, `user_ip`, `user_date`, `last_login`, `login_times`, `user_status`) VALUES
(1, '2', 'admin', 'Zhu', 'Meng', 'admin123', 'test@test.com', '127.0.0.1', '2021-02-12 19:57:36', '2021-03-26 22:42:30', 104, 'unlocked'),
(66, '0', 'Oka', 'Ryoko', 'Oka', 'oka123', 'z_meng@fanshaweonline.ca', '127.0.0.1', '2021-03-26 20:31:42', '2021-03-26 22:46:56', 3, 'unlocked'),
(2, '1', 'Evan', 'Evan', 'Chan', 'IOvtYp1m', 'z_meng@fanshaweonline.ca', NULL, '2021-03-24 21:22:39', NULL, 0, 'locked'),
(3, '0', 'Jihee', 'Jihee', 'Yu', 'yu123', 'z_meng@fanshaweonline.ca', '127.0.0.1', '2021-03-24 23:40:37', '2021-03-26 17:29:48', 5, 'unlocked');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
