import { Component, OnInit } from "@angular/core";
import { Centrozonal } from "../../interfaces/centrozonal";
import { ServicioService } from "../../servicio.service";
import { Regional } from "../../interfaces/regional";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { Centrozonalt } from "src/app/interfaces/centrozonalt";
import "jspdf-autotable";
import { autoTable as AutoTable } from "jspdf-autotable";
import { Municipio } from "../../interfaces/municipio";

@Component({
  selector: "app-reportecentrozonal",
  templateUrl: "./reportecentrozonal.component.html",
  styleUrls: ["./reportecentrozonal.component.css"]
})
export class ReportecentrozonalComponent implements OnInit {
  isHidden: boolean = true;
  isHidden1: boolean = true;
  isHidden2: boolean = true;

  centros: Centrozonalt[] = [];
  f = new Date();
  fecha =
    this.f.getDate() +
    "/" +
    (this.f.getMonth() + 1) +
    "/" +
    this.f.getFullYear();
  Nombrereporte = "Reporte centro zonal";
  fil;
  est = "";
  municipios: Municipio[] = [];
  mun = "";
  constructor(private Service: ServicioService) {}

  filtrocz = "";

  ngOnInit() {
    console.log('estado',this.est );
    this.Service.getCentroTabla().subscribe(async data => {
      this.centros = data;
      console.log(data);
      console.log("funciona");
    });

    this.Service.getMunicipio().subscribe(
      res => {
        this.municipios = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  Generareporte() {
    var doc = new jspdf("l", "pt", "a2");
    var img = document.getElementById("imagen");
    var res = doc.autoTableHtmlToJson(
      document.getElementById("contentToConvert")
    );
    var fec = this.fecha;

    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle("normal");

      doc.addImage(img, "PNG", 50, 20, 50, 50);

      doc.text("Reporte centro zonal", 110, 60, 0, 90);
      doc.text(fec, 450, 60, 0, 90);
    };

    var options = {
      beforePageContent: header,
      margin: {
        top: 80
      },
      startY: doc.autoTableEndPosY() + 100
    };

    doc.autoTable(res.columns, res.data, options);

    doc.save("reportecentrozonal.pdf");
  }
  onChange() {
    if (this.fil == "Municipio") {
      this.isHidden = true;
      this.isHidden1 = true;
      this.isHidden2 = false;
    }

    if (this.fil == "Código externo ICBF") {
      this.isHidden = false;
      this.isHidden1 = true;
      this.isHidden2 = true;
    }

    if (this.fil == "Estado") {
      this.isHidden = true;
      this.isHidden1 = false;
      this.isHidden2 = true;
    }
  }

  estad() {
    if (this.est == "Habilitado") {
    }

    if (this.est == "Deshabilitado") {
    }
  }

  opmunicipio() {}
}
