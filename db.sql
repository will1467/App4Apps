--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

-- Started on 2018-06-29 10:27:30

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2828 (class 0 OID 0)
-- Dependencies: 2827
-- Name: DATABASE "AppForApps"; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE "AppForApps" IS 'Database for Web Application "AppForApps"';


--
-- TOC entry 5 (class 2615 OID 24577)
-- Name: AppForApps; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "AppForApps";


ALTER SCHEMA "AppForApps" OWNER TO postgres;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2830 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 202 (class 1259 OID 24631)
-- Name: Comments; Type: TABLE; Schema: AppForApps; Owner: postgres
--

CREATE TABLE "AppForApps"."Comments" (
    "CommentId" integer NOT NULL,
    "IdeaId" integer NOT NULL,
    "Text" character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    "Author" character varying NOT NULL,
    "Likes" integer
);


ALTER TABLE "AppForApps"."Comments" OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 24629)
-- Name: Comments_CommentId_seq; Type: SEQUENCE; Schema: AppForApps; Owner: postgres
--

CREATE SEQUENCE "AppForApps"."Comments_CommentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "AppForApps"."Comments_CommentId_seq" OWNER TO postgres;

--
-- TOC entry 2831 (class 0 OID 0)
-- Dependencies: 201
-- Name: Comments_CommentId_seq; Type: SEQUENCE OWNED BY; Schema: AppForApps; Owner: postgres
--

ALTER SEQUENCE "AppForApps"."Comments_CommentId_seq" OWNED BY "AppForApps"."Comments"."CommentId";


--
-- TOC entry 200 (class 1259 OID 24620)
-- Name: Ideas; Type: TABLE; Schema: AppForApps; Owner: postgres
--

CREATE TABLE "AppForApps"."Ideas" (
    "IdeaId" integer NOT NULL,
    "Title" character varying(100) NOT NULL,
    "Description" character varying(500) NOT NULL,
    "Author" character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    "Likes" integer
);


ALTER TABLE "AppForApps"."Ideas" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 24618)
-- Name: Idea_IdeaId_seq; Type: SEQUENCE; Schema: AppForApps; Owner: postgres
--

CREATE SEQUENCE "AppForApps"."Idea_IdeaId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "AppForApps"."Idea_IdeaId_seq" OWNER TO postgres;

--
-- TOC entry 2832 (class 0 OID 0)
-- Dependencies: 199
-- Name: Idea_IdeaId_seq; Type: SEQUENCE OWNED BY; Schema: AppForApps; Owner: postgres
--

ALTER SEQUENCE "AppForApps"."Idea_IdeaId_seq" OWNED BY "AppForApps"."Ideas"."IdeaId";


--
-- TOC entry 198 (class 1259 OID 24612)
-- Name: Users; Type: TABLE; Schema: AppForApps; Owner: postgres
--

CREATE TABLE "AppForApps"."Users" (
    "UserId" integer NOT NULL,
    "UserName" character varying(100) NOT NULL,
    "Password" character varying(100) NOT NULL,
    "Email" character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE "AppForApps"."Users" OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 24610)
-- Name: User_UserId_seq; Type: SEQUENCE; Schema: AppForApps; Owner: postgres
--

CREATE SEQUENCE "AppForApps"."User_UserId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "AppForApps"."User_UserId_seq" OWNER TO postgres;

--
-- TOC entry 2833 (class 0 OID 0)
-- Dependencies: 197
-- Name: User_UserId_seq; Type: SEQUENCE OWNED BY; Schema: AppForApps; Owner: postgres
--

ALTER SEQUENCE "AppForApps"."User_UserId_seq" OWNED BY "AppForApps"."Users"."UserId";


--
-- TOC entry 2687 (class 2604 OID 24634)
-- Name: Comments CommentId; Type: DEFAULT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Comments" ALTER COLUMN "CommentId" SET DEFAULT nextval('"AppForApps"."Comments_CommentId_seq"'::regclass);


--
-- TOC entry 2686 (class 2604 OID 24623)
-- Name: Ideas IdeaId; Type: DEFAULT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Ideas" ALTER COLUMN "IdeaId" SET DEFAULT nextval('"AppForApps"."Idea_IdeaId_seq"'::regclass);


--
-- TOC entry 2685 (class 2604 OID 24615)
-- Name: Users UserId; Type: DEFAULT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Users" ALTER COLUMN "UserId" SET DEFAULT nextval('"AppForApps"."User_UserId_seq"'::regclass);


--
-- TOC entry 2821 (class 0 OID 24631)
-- Dependencies: 202
-- Data for Name: Comments; Type: TABLE DATA; Schema: AppForApps; Owner: postgres
--

COPY "AppForApps"."Comments" ("CommentId", "IdeaId", "Text", "createdAt", "updatedAt", "Author", "Likes") FROM stdin;
22	27	Hey Adam, that's a great idea! England have gotta win it this year	2018-06-28	2018-06-28	William	1
23	27	Maybe you theme the app as well based on what team you support?	2018-06-28	2018-06-28	John	0
\.


--
-- TOC entry 2819 (class 0 OID 24620)
-- Dependencies: 200
-- Data for Name: Ideas; Type: TABLE DATA; Schema: AppForApps; Owner: postgres
--

COPY "AppForApps"."Ideas" ("IdeaId", "Title", "Description", "Author", "createdAt", "updatedAt", "Likes") FROM stdin;
28	GasSpy	App where users can collaborate and find the cheapest petrol prices	William	2018-06-28	2018-06-28	0
27	Fifa 2018 Betting App	App where users can form groups and place bets using in-app currency on matches in Fifa World Cup 2018	Adam	2018-06-28	2018-06-28	1
\.


--
-- TOC entry 2817 (class 0 OID 24612)
-- Dependencies: 198
-- Data for Name: Users; Type: TABLE DATA; Schema: AppForApps; Owner: postgres
--

COPY "AppForApps"."Users" ("UserId", "UserName", "Password", "Email", "createdAt", "updatedAt") FROM stdin;
12	William	$2b$08$HmDu46czMxF9H4ohZk2m/.KHepRWWk6cMsa77sf7FDhwxLmN5S2.C	test@gmail.com	2018-05-23	2018-05-23
16	Bob	$2b$08$5tl7GzS2jSE60aeaiI7WxeKFSeND58OB/fveHPzFT7gfetOkT.nOa	bob@gmail.com	2018-06-01	2018-06-01
17	test	$2b$08$CbxDHMwIG9sCvKcp42a7q.sz1sBJSSoLUj/WWOb/JrUWnq.2ibmlm	test@gmail.com	2018-06-05	2018-06-05
18	test	$2b$08$2C/ZI8joZOC6IhgnOQc1yu7RlH0Tq/tfoZHC/a/n.gz0gagzT8V9m	test@gmail.com	2018-06-05	2018-06-05
20	Adam	$2b$08$YLPBVRcbTBw7pYzkKmR2F.8D89Flfk0MZ1wdggtKIZe4X2lNDExvi	adam@gmail.com	2018-06-28	2018-06-28
21	Adam	$2b$08$hqHKGS6jLnzZJr4BcmGtGuiSumvLZIwp7DYUiZFUTmT39RaG4PLLW	adam@gmail.com	2018-06-28	2018-06-28
22	John	$2b$08$ZkJiup.3hhTI9aGFK7/cbePoLyLxDGAtWhtsx1Jgpv2yvzFN2GVh.	john@gmail.com	2018-06-28	2018-06-28
\.


--
-- TOC entry 2834 (class 0 OID 0)
-- Dependencies: 201
-- Name: Comments_CommentId_seq; Type: SEQUENCE SET; Schema: AppForApps; Owner: postgres
--

SELECT pg_catalog.setval('"AppForApps"."Comments_CommentId_seq"', 23, true);


--
-- TOC entry 2835 (class 0 OID 0)
-- Dependencies: 199
-- Name: Idea_IdeaId_seq; Type: SEQUENCE SET; Schema: AppForApps; Owner: postgres
--

SELECT pg_catalog.setval('"AppForApps"."Idea_IdeaId_seq"', 28, true);


--
-- TOC entry 2836 (class 0 OID 0)
-- Dependencies: 197
-- Name: User_UserId_seq; Type: SEQUENCE SET; Schema: AppForApps; Owner: postgres
--

SELECT pg_catalog.setval('"AppForApps"."User_UserId_seq"', 22, true);


--
-- TOC entry 2693 (class 2606 OID 24639)
-- Name: Comments Comments_pkey; Type: CONSTRAINT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY ("CommentId");


--
-- TOC entry 2691 (class 2606 OID 24625)
-- Name: Ideas Idea_pkey; Type: CONSTRAINT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Ideas"
    ADD CONSTRAINT "Idea_pkey" PRIMARY KEY ("IdeaId");


--
-- TOC entry 2689 (class 2606 OID 24617)
-- Name: Users User_pkey; Type: CONSTRAINT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Users"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("UserId");


--
-- TOC entry 2694 (class 2606 OID 24640)
-- Name: Comments ToIdea; Type: FK CONSTRAINT; Schema: AppForApps; Owner: postgres
--

ALTER TABLE ONLY "AppForApps"."Comments"
    ADD CONSTRAINT "ToIdea" FOREIGN KEY ("IdeaId") REFERENCES "AppForApps"."Ideas"("IdeaId");


-- Completed on 2018-06-29 10:27:30

--
-- PostgreSQL database dump complete
--

