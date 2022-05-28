import React from "react";
import axios from "axios";
import { useState, useEffect  } from "react";
import { Link,Outlet, useNavigate } from "react-router-dom";

const readUrl="http://localhost/Jerbic_spj_lv8/read.php";
export default function GetArtikli()
{
    const [artikli, setArtikli] = useState([]);
    useEffect(() => {
        axios.get(readUrl).then((response) => {
        setArtikli(response.data);
        });
        }, []);

    return artikli;

}