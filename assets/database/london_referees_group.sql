-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2021 at 01:28 AM
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
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_events`
--

INSERT INTO `tbl_events` (`events_id`, `events_name`, `events_subject`, `events_creator`, `last_executed`, `events_file`) VALUES
(1, 'Criminal Declaration', 'This is Criminal Declaration Form for all members', 'admin', '2021-03-25 15:37:06', 'OHF_Criminal_Declaration_Form.pdf'),
(2, 'LRG Bylaws', 'LRG Bylaws', 'admin', '2021-03-27 02:38:09', 'LRG_Bylaws_March_21__2017.pdf');

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
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_level`, `user_name`, `user_fname`, `user_lname`, `user_password`, `user_email`, `user_ip`, `user_date`, `last_login`, `login_times`, `user_status`) VALUES
(1, '2', 'Meng', 'Zhu', 'Meng', '112233', 'test@test.com', '127.0.0.1', '2021-02-12 19:57:36', '2021-03-31 01:20:16', 143, 'unlocked'),
(5, '0', 'Oka', 'Ryoko', 'Oka', 'oka123', 'z_meng@fanshaweonline.ca', '127.0.0.1', '2021-03-31 00:10:46', '2021-03-31 00:11:25', 1, 'unlocked'),
(2, '1', 'Evan', 'Evan', 'Chan', '112233', 'z_meng@fanshaweonline.ca', NULL, '2021-03-24 21:22:39', NULL, 0, 'locked'),
(3, '0', 'Jihee', 'Jihee', 'Yu', 'yu123', 'z_meng@fanshaweonline.ca', '127.0.0.1', '2021-03-24 23:40:37', '2021-03-30 18:55:15', 10, 'unlocked'),
(4, '0', 'Petrova', 'Elina', 'Petrova', '19KWMUyz', 'z_meng@fanshaweonline.ca', NULL, '2021-03-31 00:21:29', NULL, 0, 'unlocked');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
