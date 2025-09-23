import Item from "./Item";

export default function ItemListContainer( props ) {
    return (
        <section>
            <h2 className="titulo">{ props.greeting }</h2>
            <Item
            title="Monitor 144hz"
            img="https://www.lg.com/content/dam/channel/wcms/pe/images/monitores/27gr93u-b_awf_espr_pe_c/gallery/dz-1.jpg/jcr:content/renditions/thum-1600x1062.jpeg"
            price ="350.000" />

            <Item
            title="placa de video AMD Radeon RX7600"
            img="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40842_Placa_de_Video_XFX_Radeon_RX_7600_8GB_GDDR6_SPEEDSTER_SWIFT_210_83cf4d2a-grn.jpg"
            price="400.000" />
            
        </section>
    )
}