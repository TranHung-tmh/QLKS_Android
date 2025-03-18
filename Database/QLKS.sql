CREATE DATABASE  IF NOT EXISTS `qlks` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `qlks`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: qlks
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `datphong`
--

DROP TABLE IF EXISTS `datphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datphong` (
  `MaDatPhong` int NOT NULL AUTO_INCREMENT,
  `MaKhachHang` int NOT NULL,
  `MaPhong` int NOT NULL,
  `NgayDat` date NOT NULL,
  `NgayTra` date NOT NULL,
  `TrangThai` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'Đang xử lý',
  PRIMARY KEY (`MaDatPhong`),
  KEY `MaKhachHang` (`MaKhachHang`),
  KEY `MaPhong` (`MaPhong`),
  CONSTRAINT `datphong_ibfk_1` FOREIGN KEY (`MaKhachHang`) REFERENCES `khachhang` (`MaKhachHang`),
  CONSTRAINT `datphong_ibfk_2` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datphong`
--

LOCK TABLES `datphong` WRITE;
/*!40000 ALTER TABLE `datphong` DISABLE KEYS */;
INSERT INTO `datphong` VALUES (1,1,1,'2023-10-01','2023-10-03','Đã xác nhận'),(2,2,2,'2023-10-05','2023-10-07','Đang xử lý'),(3,3,4,'2023-10-10','2023-10-12','Đã hủy');
/*!40000 ALTER TABLE `datphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dichvu`
--

DROP TABLE IF EXISTS `dichvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dichvu` (
  `MaDichVu` int NOT NULL AUTO_INCREMENT,
  `TenDichVu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GiaDichVu` decimal(10,2) NOT NULL,
  `MoTa` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaDichVu`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dichvu`
--

LOCK TABLES `dichvu` WRITE;
/*!40000 ALTER TABLE `dichvu` DISABLE KEYS */;
INSERT INTO `dichvu` VALUES (1,'Ăn sáng buffet',150000.00,'Bữa sáng tự chọn đa dạng món'),(2,'Giặt là',50000.00,'Giặt và là quần áo theo yêu cầu'),(3,'Thuê xe máy',200000.00,'Thuê xe máy di chuyển trong ngày'),(4,'Massage',300000.00,'Dịch vụ massage thư giãn');
/*!40000 ALTER TABLE `dichvu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `MaKhachHang` int NOT NULL AUTO_INCREMENT,
  `HoTen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoDienThoai` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiaChi` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CMND` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MaNguoiDung` int DEFAULT NULL,
  PRIMARY KEY (`MaKhachHang`),
  UNIQUE KEY `Email` (`Email`),
  KEY `MaNguoiDung` (`MaNguoiDung`),
  CONSTRAINT `khachhang_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Lê Thị Cẩm Tú','0935123456','tu.le@gmail.com','123 Đường Láng, Hà Nội','123456789',3),(2,'Phạm Quốc Hùng','0945123456','hung.pham@gmail.com','45 Nguyễn Huệ, TP.HCM','987654321',NULL),(3,'Ngô Minh Đức','0925123456','duc.ngo@gmail.com','78 Lê Lợi, Đà Nẵng','456123789',NULL);
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoidung` (
  `MaNguoiDung` int NOT NULL AUTO_INCREMENT,
  `TenDangNhap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MatKhau` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MaQuyen` int DEFAULT NULL,
  PRIMARY KEY (`MaNguoiDung`),
  UNIQUE KEY `TenDangNhap` (`TenDangNhap`),
  KEY `MaQuyen` (`MaQuyen`),
  CONSTRAINT `nguoidung_ibfk_1` FOREIGN KEY (`MaQuyen`) REFERENCES `quyenhan` (`MaQuyen`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'admin123','admin123',1),(2,'nhanvien1','nv123',2),(3,'khachhang1','kh123',3);
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `MaNV` int NOT NULL AUTO_INCREMENT,
  `HoTen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoDienThoai` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ChucVu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayVaoLam` date NOT NULL,
  `Luong` decimal(10,2) NOT NULL,
  `MaNguoiDung` int DEFAULT NULL,
  PRIMARY KEY (`MaNV`),
  UNIQUE KEY `Email` (`Email`),
  KEY `MaNguoiDung` (`MaNguoiDung`),
  CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (1,'Nguyễn Văn An','0905123456','an.nv@qlks.com','Lễ tân','2023-01-15',10000000.00,2),(2,'Trần Thị Bình','0916123456','binh.tt@qlks.com','Kỹ thuật viên','2022-05-20',12000000.00,NULL);
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien_xuly_baotri`
--

DROP TABLE IF EXISTS `nhanvien_xuly_baotri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien_xuly_baotri` (
  `MaNV` int NOT NULL,
  `MaYeuCau` int NOT NULL,
  `NgayHoanThanh` date NOT NULL,
  PRIMARY KEY (`MaNV`,`MaYeuCau`),
  KEY `MaYeuCau` (`MaYeuCau`),
  CONSTRAINT `nhanvien_xuly_baotri_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`),
  CONSTRAINT `nhanvien_xuly_baotri_ibfk_2` FOREIGN KEY (`MaYeuCau`) REFERENCES `yeucaubaotri` (`MaYeuCau`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien_xuly_baotri`
--

LOCK TABLES `nhanvien_xuly_baotri` WRITE;
/*!40000 ALTER TABLE `nhanvien_xuly_baotri` DISABLE KEYS */;
INSERT INTO `nhanvien_xuly_baotri` VALUES (2,2,'2023-10-10');
/*!40000 ALTER TABLE `nhanvien_xuly_baotri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien_xuly_datphong`
--

DROP TABLE IF EXISTS `nhanvien_xuly_datphong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien_xuly_datphong` (
  `MaNV` int NOT NULL,
  `MaDatPhong` int NOT NULL,
  `NgayXuLy` date NOT NULL,
  PRIMARY KEY (`MaNV`,`MaDatPhong`),
  KEY `MaDatPhong` (`MaDatPhong`),
  CONSTRAINT `nhanvien_xuly_datphong_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`),
  CONSTRAINT `nhanvien_xuly_datphong_ibfk_2` FOREIGN KEY (`MaDatPhong`) REFERENCES `datphong` (`MaDatPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien_xuly_datphong`
--

LOCK TABLES `nhanvien_xuly_datphong` WRITE;
/*!40000 ALTER TABLE `nhanvien_xuly_datphong` DISABLE KEYS */;
INSERT INTO `nhanvien_xuly_datphong` VALUES (1,1,'2023-10-01'),(1,2,'2023-10-05');
/*!40000 ALTER TABLE `nhanvien_xuly_datphong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phong`
--

DROP TABLE IF EXISTS `phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phong` (
  `MaPhong` int NOT NULL AUTO_INCREMENT,
  `LoaiPhong` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GiaPhong` decimal(10,2) NOT NULL,
  `TrangThai` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'Trống',
  `MaNguoiDung` int DEFAULT NULL,
  PRIMARY KEY (`MaPhong`),
  KEY `MaNguoiDung` (`MaNguoiDung`),
  CONSTRAINT `phong_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phong`
--

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;
INSERT INTO `phong` VALUES (1,'Phòng Đơn',500000.00,'Trống',1),(2,'Phòng Đôi',800000.00,'Đã đặt',NULL),(3,'Phòng VIP',1500000.00,'Trống',NULL),(4,'Phòng Đơn',500000.00,'Trống',1),(5,'Phòng Đôi',800000.00,'Đang bảo trì',NULL);
/*!40000 ALTER TABLE `phong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quyenhan`
--

DROP TABLE IF EXISTS `quyenhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quyenhan` (
  `MaQuyen` int NOT NULL AUTO_INCREMENT,
  `TenQuyen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`MaQuyen`),
  UNIQUE KEY `TenQuyen` (`TenQuyen`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quyenhan`
--

LOCK TABLES `quyenhan` WRITE;
/*!40000 ALTER TABLE `quyenhan` DISABLE KEYS */;
INSERT INTO `quyenhan` VALUES (1,'Admin'),(3,'KhachHang'),(2,'NhanVien');
/*!40000 ALTER TABLE `quyenhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sudungdv`
--

DROP TABLE IF EXISTS `sudungdv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sudungdv` (
  `MaSuDungDV` int NOT NULL AUTO_INCREMENT,
  `MaKhachHang` int NOT NULL,
  `MaDichVu` int NOT NULL,
  `NgaySuDung` date NOT NULL,
  `SoLuong` int NOT NULL,
  `TongTien` decimal(10,2) NOT NULL,
  PRIMARY KEY (`MaSuDungDV`),
  KEY `MaKhachHang` (`MaKhachHang`),
  KEY `MaDichVu` (`MaDichVu`),
  CONSTRAINT `sudungdv_ibfk_1` FOREIGN KEY (`MaKhachHang`) REFERENCES `khachhang` (`MaKhachHang`),
  CONSTRAINT `sudungdv_ibfk_2` FOREIGN KEY (`MaDichVu`) REFERENCES `dichvu` (`MaDichVu`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sudungdv`
--

LOCK TABLES `sudungdv` WRITE;
/*!40000 ALTER TABLE `sudungdv` DISABLE KEYS */;
INSERT INTO `sudungdv` VALUES (1,1,1,'2023-10-02',2,300000.00),(2,2,3,'2023-10-06',1,200000.00),(3,3,4,'2023-10-11',1,300000.00);
/*!40000 ALTER TABLE `sudungdv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhtoan`
--

DROP TABLE IF EXISTS `thanhtoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhtoan` (
  `MaThanhToan` int NOT NULL AUTO_INCREMENT,
  `MaDatPhong` int NOT NULL,
  `MaNV` int DEFAULT NULL,
  `SoTien` decimal(10,2) NOT NULL,
  `PhuongThuc` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgayThanhToan` date NOT NULL,
  PRIMARY KEY (`MaThanhToan`),
  KEY `MaDatPhong` (`MaDatPhong`),
  KEY `MaNV` (`MaNV`),
  CONSTRAINT `thanhtoan_ibfk_1` FOREIGN KEY (`MaDatPhong`) REFERENCES `datphong` (`MaDatPhong`),
  CONSTRAINT `thanhtoan_ibfk_2` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhtoan`
--

LOCK TABLES `thanhtoan` WRITE;
/*!40000 ALTER TABLE `thanhtoan` DISABLE KEYS */;
INSERT INTO `thanhtoan` VALUES (1,1,1,1000000.00,'Tiền mặt','2023-10-03'),(2,2,1,1600000.00,'Chuyển khoản','2023-10-07');
/*!40000 ALTER TABLE `thanhtoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yeucaubaotri`
--

DROP TABLE IF EXISTS `yeucaubaotri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yeucaubaotri` (
  `MaYeuCau` int NOT NULL AUTO_INCREMENT,
  `MaPhong` int NOT NULL,
  `NgayYeuCau` date NOT NULL,
  `MoTa` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TrangThai` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'Chưa xử lý',
  PRIMARY KEY (`MaYeuCau`),
  KEY `MaPhong` (`MaPhong`),
  CONSTRAINT `yeucaubaotri_ibfk_1` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeucaubaotri`
--

LOCK TABLES `yeucaubaotri` WRITE;
/*!40000 ALTER TABLE `yeucaubaotri` DISABLE KEYS */;
INSERT INTO `yeucaubaotri` VALUES (1,5,'2023-10-08','Máy lạnh không hoạt động','Chưa xử lý'),(2,2,'2023-10-09','Đèn phòng bị hỏng','Đã xử lý');
/*!40000 ALTER TABLE `yeucaubaotri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-18 10:31:46
