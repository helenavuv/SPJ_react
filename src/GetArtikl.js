import GetArtikli from "./GetArtikli"
export default function getArtikl(id) {
    const artikli=GetArtikli();
    return artikli.find(
    (artikl) => artikl.id === id
    );}