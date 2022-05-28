import React from "react";
import axios from "axios";
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

const readUrl="http://localhost/Jerbic_spj_lv8/read.php";

function Ucitaj()
{

    const [artikli, setArtikli] = useState([]);
    useEffect(() => {
        axios.get(readUrl).then((response) => {
            setArtikli(response.data);
        });
    },[]);

    return(
        <>
         <input type="text" id="myInput" placeholder="Pretraži" onKeyUp={myFunction}></input>
        <table className="table table-striped" id="myTable">
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Naziv</th>
                    <th>Proizvodac</th>
                    <th>Model</th>
                    <th>Cijena</th>
                    <th>Kolicina</th>
                    <th>Obriši</th>
                    <th>Ažuriraj</th>
                </tr>
            </thead>
            <tbody>
                {artikli.map(x =>{
                    return(
                        <tr key={x.Id}>
                    <td>{x.Id}</td>
                    <td>{x.Naziv}</td>
                    <td>{x.Proizvodac}</td>
                    <td>{x.Model}</td>
                    <td>{x.Cijena} kn</td>
                    <td>{x.Kolicina}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=>deleteArtikl(x.Id)}> Obriši </button></td>
                    <td><Link to={`/${x.Id}`} ><button className="btn btn-outline-success"> Ažuriraj </button></Link></td>
                </tr>

                    )
                })}
            </tbody>
            
        </table>
        
    </>

    )

}

function deleteArtikl(ajdi)
{
    if(window.confirm("Zelite li izbrisati artikl s id-om: "+ajdi))
    {
        console.log("Usao");
        axios({
            method: 'get',
            url: `http://localhost/Jerbic_spj_lv8/delete.php?id=${ajdi}`,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            window.location.reload(false);
            console.log(response);

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


export default Ucitaj;
