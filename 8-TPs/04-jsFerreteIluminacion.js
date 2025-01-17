/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Brian Trinchero Div Z
Tp/4 Ferrete Iluminacion
 */
function CalcularPrecio () 
{
    let precioLamparas;
    let totalLamparas;
    let descuento;
    let marcaLamparas;
    let precioTotal;
    let precioNeto;
    let impuesto;

    precioLamparas = 35;

    totalLamparas = document.getElementById('txtIdCantidad').value;
    totalLamparas = parseFloat(totalLamparas);


    marcaLamparas = document.getElementById('Marca').value;

    precioTotal = precioLamparas * totalLamparas;

    impuesto = precioTotal * 0.10;

    if(totalLamparas > 0)
    {
        switch (totalLamparas)
        {
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                        descuento = 0.15;
                        break;
                    case "FelipeLamparas":
                        descuento = 0.10;
                        break;
                    default:
                        descuento = 0.05;
                        break;
                }
                break;
            case 4:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25;
                        break;
                    default:
                        descuento = 0.20;
                        break;
                }
                break;
            case 5:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                        descuento = 0.40;
                        break;
                    default:
                        descuento = 0.30;
                        break;
                }
                break;
            default:
                descuento = 0.50;
                break;
        }


        precioNeto = precioTotal - (precioTotal * descuento);

        if(precioTotal > 120)
        {
            precioNeto = precioNeto + impuesto;
            alert("IIBB Usted pago $" + impuesto);
        }

        document.getElementById('txtIdprecioDescuento').value = precioTotal;
    }
    else
    {
        alert("El número ingresado no es válido");
    }
}