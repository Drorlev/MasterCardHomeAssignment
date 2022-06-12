USE [master]
GO

/****** Object:  Database [MasterCardFullstackJ]    Script Date: 10-Jun-22 17:32:36 ******/
CREATE DATABASE [MasterCardFullstackJ]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MasterCardFullstackJ', FILENAME = N'C:\Users\dubel\MasterCardFullstackJ.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MasterCardFullstackJ_log', FILENAME = N'C:\Users\dubel\MasterCardFullstackJ_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MasterCardFullstackJ].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [MasterCardFullstackJ] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET ARITHABORT OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [MasterCardFullstackJ] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [MasterCardFullstackJ] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET  DISABLE_BROKER 
GO

ALTER DATABASE [MasterCardFullstackJ] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [MasterCardFullstackJ] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [MasterCardFullstackJ] SET  MULTI_USER 
GO

ALTER DATABASE [MasterCardFullstackJ] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [MasterCardFullstackJ] SET DB_CHAINING OFF 
GO

ALTER DATABASE [MasterCardFullstackJ] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [MasterCardFullstackJ] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [MasterCardFullstackJ] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [MasterCardFullstackJ] SET QUERY_STORE = OFF
GO

USE [MasterCardFullstackJ]
GO

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO

ALTER DATABASE [MasterCardFullstackJ] SET  READ_WRITE 
GO


USE [MasterCardFullstackJ]
GO

/****** Object:  Table [dbo].[Questions]    Script Date: 10-Jun-22 22:20:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Questions](
	[qid] [int] IDENTITY(1,1) NOT NULL,
	[question] [nvarchar](250) NOT NULL,
	[q_type] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[qid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO



INSERT INTO [dbo].[Questions]
           ([question]
           ,[q_type])
     VALUES
           ('password policy – pass length:', 1)
GO

INSERT INTO [dbo].[Questions]
           ([question]
           ,[q_type])
     VALUES
           ('What are the official languages of Canada?', 0)
GO

USE [MasterCardFullstackJ]
GO

/****** Object:  Table [dbo].[Answers]    Script Date: 11-Jun-22 17:15:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Answers](
	[aid] [int] IDENTITY(1,1) NOT NULL,
	[qid] [int] NOT NULL,
	[the_Answer] [varchar](100) NOT NULL,
	[score] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[aid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Answers]  WITH CHECK ADD  CONSTRAINT [FK_Qid] FOREIGN KEY([qid])
REFERENCES [dbo].[Questions] ([qid])
GO

ALTER TABLE [dbo].[Answers] CHECK CONSTRAINT [FK_Qid]
GO

USE [MasterCardFullstackJ]
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (1,'12+',50)
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (1,'6-8',25)
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (1,'4',0)
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (2,'English',25)
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (2,'French ',25)
GO

INSERT INTO [dbo].[Answers]
           ([qid]
           ,[the_Answer]
           ,[score])
     VALUES
           (2,'Spanish',0)
GO

USE [MasterCardFullstackJ]
GO

/****** Object:  Table [dbo].[Answered]    Script Date: 11-Jun-22 20:02:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Answered](
	[aid] [int] NOT NULL,
	[qid] [int] NOT NULL,
	[qustionnaireID] [int] NOT NULL,
	[comment] [nvarchar](100) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Answered]  WITH CHECK ADD  CONSTRAINT [FK_Aid_Answered] FOREIGN KEY([aid])
REFERENCES [dbo].[Answers] ([aid])
GO

ALTER TABLE [dbo].[Answered] CHECK CONSTRAINT [FK_Aid_Answered]
GO

ALTER TABLE [dbo].[Answered]  WITH CHECK ADD  CONSTRAINT [FK_Qid_Answered] FOREIGN KEY([qid])
REFERENCES [dbo].[Questions] ([qid])
GO

ALTER TABLE [dbo].[Answered] CHECK CONSTRAINT [FK_Qid_Answered]
GO

