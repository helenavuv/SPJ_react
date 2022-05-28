import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const readUrl="http://localhost/Jerbic_spj_lv8/read.php";

function AzurirajId()
{
    const navigate=useNavigate();
    const params = useParams();
    const [artikl, setArtikl] = useState([]);
    const [inputs, setInputs] = useState({});
    useEffect(() => {
        axios({
                method: 'get',
                url: `http://localhost/Jerbic_spj_lv8/find.php?id=${params.artId}`,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                
                setArtikl(response.data);
    
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        
    },[params.artId]);

    const handleSubmit = (event) => {
        event.preventDefault();

        event.preventDefault();
        let formData = new FormData();
        formData.append('naziv', inputs.naziv)
        formData.append('proizvodac', inputs.proizvodac)
        formData.append('model', inputs.model)
        formData.append('cijena', inputs.cijena)
        formData.append('kolicina', inputs.kolicina)
        formData.append('id',params.artId)

        axios({
            method: 'post',
            url: 'http://localhost/Jerbic_spj_lv8/update.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            
            console.log(response);
            navigate('/');
            window.location.reload(false);

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
        
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return(
        <>
        {artikl.map(y =>{
                    return(
                        <form onSubmit={handleSubmit} key={y.Id}>
            <br />
            <label>Unesite naziv:
                <input
                type="text"
                name="naziv"
                value={inputs.naziv || y.Naziv}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite proizvodaca:
                <input
                type="text"
                name="proizvodac"
                value={inputs.proizvodac || y.Proizvodac}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite model:
                <input
                type="text"
                name="model"
                value={inputs.model || y.Model}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite cijenu:
                <input
                type="text"
                name="cijena"
                value={inputs.cijena || y.Cijena}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <label>Unesite kolicinu:
                <input
                type="text"
                name="kolicina"
                value={inputs.kolicina || y.Kolicina}
                onChange={handleChange}
                />
            </label>
            <br /><br />
            <input type="submit" />
        </form>)
                })}

        
    </>

    )

    

}


export default AzurirajId;