//Packages
import React from "react";
import PropTypes from "prop-types";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
import { Button } from "@mui/material";

//Hooks
import useStrings from "../../../../strings";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    textAlign: "justify",
  },
  section: {
    padding: 10,
    textAlign: "center",
  },
  sectionTwoColumns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dataFirmas: {
    padding: 15,
  },
});

const PdfView = (props) => {
  const { handleChangeScreen, screenActive } = props;
  const data = screenActive.data;

  const { useConstants } = useStrings();
  const { TYPE_CONTRACTS } = useConstants();

  const dateInJsFechaIngreso = new Date(data.fechaIngreso);
  const dateInJsFechaFin = new Date(data.fechaRetiro);
  const dateInJsFechaNacimiento = new Date(data.fechaNacimiento);

  const documentToViewAndDownload = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              CONTRATO:{" "}
              <span className="font-semibold uppercase">
                {" "}
                {TYPE_CONTRACTS[data.nombreContrato]}
              </span>{" "}
              FUNDACION FGMC POPAYAN{" "}
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NOMBRE EMPLEADOR:</Text>
            <Text>FUNDACION GIMNASIO MODERNO DEL CAUCA</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>REPRESENTANTE LEGAL:</Text>
            <Text>LUIS ARMANDO ORTIZ ARGOTE</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>DOMICILIO EMPLEADOR:</Text>
            <Text className="uppercase">
              CRA 5 NO. 48N-60 CICLOVIA POPAYÁN CAUCA
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NOMBRE DEL TRABAJADOR:</Text>
            <Text>{data.nombreEmpleado}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>DIRECCIÓN TRABAJADOR:</Text>
            <Text>{data.direccion}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>IDENTIFICACIÓN:</Text>
            <Text>1061798713</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUGAR Y FECHA DE NACIMIENTO</Text>
            <Text>
              {data.lugarExpedicion} -
              {dayjs(dateInJsFechaNacimiento).format("MMM DD YYYY")}
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NACIONALIDAD DEL TRABAJADOR</Text>
            <Text>COLOMBIANO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>TRABAJO A DESEMPEÑAR</Text>
            <Text>{data.cargo}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>SALARIO</Text>
            <Text>{data.salario}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>AUXILIO DE TRANSPORTE DE LEY</Text>
            <Text>{data.auxilioporTransporte}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>PERIODO DE PAGO</Text>
            <Text>MENSUAL</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUGAR DE TRABAJO</Text>
            <Text>CARRERA 5 NO. 48N-60</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FECHA INICIO LABORES</Text>
            <Text>{dayjs(dateInJsFechaIngreso).format("MMM DD YYYY")}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FECHA TERMINACIÓN </Text>
            <Text>{dayjs(dateInJsFechaFin).format("MMM DD YYYY")}</Text>
          </View>
          <View style={styles.section}>
            <Text>
              Entre los suscritos a saber LUIS ARMANDO ORTIZ ARGOTE,
              identificado(a) con Cédula de Ciudadanía No. 12.957.715 de Pasto
              (Nariño), quien actúa en calidad de representante legal de la
              FUNDACIÓN GIMNASIO MODERNO DEL CAUCA, quien para efectos del
              presente contrato de denominará el empleador y por otra parte el
              trabajador de las condiciones ya dichas, identificados como
              aparece al pie de sus firmas, se ha celebrado el presente contrato
              individual de trabajo, regido además por las siguientes cláusulas:
              PRIMERA.- Objeto: El empleador contrata los servicios personales
              del trabajador y éste se obliga: a) A poner al servicio del
              empleador toda su capacidad normal de trabajo, en forma exclusiva
              en el desempeño de las funciones propias del oficio mencionado y
              en las labores anexas y complementarias del mismo, de conformidad
              con las órdenes e instrucciones que le imparta el empleador o sus
              representantes, y b) A no prestar directa ni indirectamente
              servicios laborales a otros empleadores, ni a trabajar por cuenta
              propia en el mismo oficio, durante la vigencia de este contrato.
              SEGUNDA.- Las partes declaran que en el presente contrato se
              entienden incorporadas, en lo pertinente, las disposiciones
              legales que regulan las relaciones entre la Fundación y sus
              trabajadores, en especial, las del contrato de trabajo para el
              oficio que se suscribe, fuera de las obligaciones consignadas en
              los reglamentos de trabajo y de Higiene y Seguridad Industrial de
              la Fundación. PARAGRAFO: Dar cumplimiento a lo estipulado en la
              normatividad legal vigente en materia de seguridad y salud en el
              trabajo en cuanto a deberes y responsabilidades de los empleados y
              contratistas, en especial en lo atinente a: 1. Gestión del riesgo
              y plan de prevención, preparación y respuesta ante emergencias.(
              Decreto 1072 de 2015 art. 2.2.4.6.25, ley 1523 de 2012, resolución
              1016 de 1989): El trabajador debe hacer parte de la brigada de
              emergencias si así se le designa por parte del empleador o
              representante del mismo. El trabajador debe asistir a los
              programas de formación de prevención preparación y respuesta ante
              emergencias y de primeros auxilios que establezca el empleador o
              contratante por cuenta propia o a través de los servicios de apoyo
              de la ARL. 2. comité de seguridad y salud en el trabajo COPASST
              (resolución 2013 de 1986): el trabajador debe hacer parte del
              comité paritario de seguridad y salud en el trabajo COPASST si así
              es designado por el empleador o representante de este. 3. comité
              de convivencia laboral (resolución 652 de 2012; resolución 1356 de
              2012): el trabajador debe hacer parte del comité de convivencia
              laboral si así se le designa por parte del empleador o
              representante de este. 4. comité de gestión del riesgo (ley 1523
              de 2012): el trabajador debe hacer parte del comité de gestión del
              riesgo si así se le designa. 5. gestión de la seguridad y salud en
              el trabajo en su sitio de trabajo (decreto 1072 de 2015 capitulo
              6, articulo 2.2.4.6.10): El trabajador debe realizar las
              inspecciones periódicas de seguridad de su sitio de trabajo en el
              marco del protocolo de seguridad y lista de chequeo establecido
              para tal fin y reportar sus hallazgos oportunamente así como
              gestionar la seguridad y salud de su sitio de trabajo. El
              trabajador debe generar todos los registros que le sean encargados
              acorde a los formatos establecidos para el funcionamiento del
              SGSST, el trabajador debe asistir a todas las capacitaciones de
              seguridad y salud en el trabajo entendiendo a estas como un
              requisito legal y laboral. Cuando por alguna circunstancia el
              trabajador se debe ausentar de las actividades de seguridad y
              salud en el trabajo, deberá reportarlo oportunamente y soportarlo
              acorde lo establecido en la ley vigente como causales de ausencia
              justificada a la labor contratada. 6. accidente laboral (ley 1562
              de 2012, resolución 1401 de 2007): En el caso de presentarse un
              accidente laboral, el trabajador deberá reportarlo oportunamente
              según lo establecido en el marco legal aplicable de 2 días
              hábiles. El trabajador deberá asistir a las citaciones que con el
              propósito de la investigación del accidente laboral, le sean
              emitidas por la empresa, ARL o el ministerio de trabajo cuando
              haya lugar. El trabajador está obligado a suministrar la
              documentación necesaria para la gestión de las incapacidades que
              se generen a consecuencia de un accidente laboral o enfermedad
              laboral por parte del empleador o contratante. 7. enfermedad
              laboral (ley 1562 de 2012; resolución 1111 de 2017): En caso de
              realizársele la calificación en primera instancia de enfermedad
              laboral, el trabajador debe reportar oportunamente al empleador o
              contratante al respecto con el propósito de que se dé inicio al
              proceso que para tal propósito determina el marco legal vigente
              aplicable. 8. elementos de protección personal si aplica ( ley 9
              de 1979; resolución 2400 de 1979): El trabajador debe hacer uso
              racional y adecuado de sus elementos de protección personal en
              coherencia con su función contratada. 9. medicina preventiva y del
              trabajo (DUR 1072 de 2015, ley 1562 de 2012, resolución 1016 de
              1989): El trabajador debe asistir a todas las actividades que sean
              programadas en el marco de la medicina preventiva y del trabajo,
              incluidas las valoraciones medico ocupacionales, tamizajes de
              salud, campañas de salud, y demás que sean aplicables acorde a los
              propósitos de la promoción de salud y la prevención de la
              enfermedad en los sitios de trabajo. 10. ausentismo de actividades
              de seguridad y salud en el trabajo (código sustantivo del trabajo
              y normatividad relacionada):El trabajador que por cualquier
              circunstancia requiera o deba ausentarse de las actividades de
              seguridad y salud en el trabajo deberá soportarlo acorde a lo
              establecido en el marco legal aplicable vigente, so pena de
              nivelarse o reprogramarse las actividades con los ausentes cuando
              así se le requiera y con el propósito de dar cumplimiento a los
              objetivos del SGSST en el marco de la normatividad legal vigente
              aplicable. 11. gestión documental del sistema de gestión de
              seguridad y salud en el trabajo ( DUR 1072 art 2.2.4.6.10 numeral
              6, Con el propósito de participar y contribuir al cumplimiento de
              los objetivos y del SGSST, los trabajadores deberán ayudar a la
              elaboración de procesos y procedimientos documentados, guías,
              protocolos y relacionados que sean aplicables de acuerdo a su
              cargo y conocimientos y que le sean de utilidad para fortalecer el
              SGSST desde cada uno de sus puestos de trabajo y que ayuden en la
              prevención de accidentes y enfermedades laborales. 12. rendición
              de cuentas decreto 1072 de 2015 Art. 2.2.4.6.8. Numeral 3. : todos
              los trabajadores que le hayan sido asignadas responsabilidades
              dentro del sistema de gestión de seguridad y salud en el trabajo
              deberán rendir cuentas al interior de la organización de
              conformidad con el marco legal vigente aplicable, esto incluye
              generación de informes y registros, así como asistir a las
              reuniones que para tal propósito cite la representación legal,
              área de seguridad y salud en el trabajo o los entes de inspección
              vigilancia y control en materia como la ARL y el Ministerio del
              Trabajo TERCERA.- En relación con la actividad propia del
              trabajador, éste la ejecutará dentro de las siguientes modalidades
              que implican claras obligaciones para el mismo trabajador así: -
              Prestar el Servicio de Vigilancia en horario desde 6:00 a.m hasta
              las 2:00 p.m.; - Mantener cerrada la Puerta principal; - Prohibido
              entregar elementos de la Fundación sin la debida autorización; -
              Responder por los archivos, equipos, muebles y enseres de la
              Fundación; - Prestarle Seguridad a las instalaciones de la
              Fundación; Controlar la entrada y salida de personas, vehículos y
              objetos de la Fundación; - Estar pendiente del mantenimiento,
              Avisos, lámparas, daños en baños u otro servicio e imponer orden
              en las personas que solicitan información; - Direccionar las
              llamadas que entren por la portería a las dependencias; -
              Resguardar las instalaciones y personas que están dentro de la
              Fundación; – Garantizar que en desarrollo de su trabajo, utilizará
              todos los elementos e indumentaria propia de las funciones que le
              correspondan acorde a los protocolos de limpieza y desinfección y
              de seguridad y salud en el trabajo - desarrollar las acciones
              necesarias, para asegurar la limpieza, desinfección de espacios,
              mobiliario - realizar las acciones necesarias para el adecuado
              manejo de residuos sólidos - detectar y dar alertas sobre plagas y
              vectores en el espacio donde se presta el servicio; - Realizar
              mantenimiento en las zonas verdes y servicio de jardinería;
              Reportar las anomalías detectadas en sus turno e informar
              oportunamente de las mismas; - Acatar órdenes de las Directivas de
              la Fundación; - Realizar tareas que le sean asignadas por su jefe
              inmediato y así garantizar un trabajo de calidad. - Observar
              rigurosamente las normas que le fije la Fundación para la
              realización de la labor a que se refiere el presente contrato. –
              Guardar absoluta reserva, salvo autorización expresa de la
              Fundación, de todas aquellas informaciones que lleguen a su
              conocimiento, en razón de su trabajo, y que sean por naturaleza
              privadas. – Ejecutar por si mismo las funciones asignadas y
              cumplir estrictamente las instrucciones que le sean dadas por la
              Fundación, o por quienes la representen, respecto del desarrollo
              de sus actividades. – Cuidar permanentemente los intereses de la
              Fundación. – Dedicar la totalidad de su jornada de trabajo a
              cumplir a cabalidad con sus funciones. – Programar diariamente su
              trabajo y asistir puntualmente a las reuniones que efectúe la
              Fundación a las cuales hubiere sido citado. – Observar completa
              armonía y comprensión con los Padres de familia, estudiantes, con
              sus superiores y compañeros de trabajo, en sus relaciones
              personales y en la ejecución de su labor; igualmente queda
              totalmente prohibido tener relaciones amorosas con sus compañeros
              de trabajo. – Cumplir permanentemente con espíritu de lealtad,
              colaboración y disciplina con la Fundación. – Avisar oportunamente
              y por escrito, a la Fundación todo cambio en su dirección,
              teléfono o ciudad de residencia. CUARTA.- El empleador pagará al
              trabajador por la prestación de sus servicios el salario indicado,
              pagadero en las oportunidades también señaladas en la parte
              superior de este contrato. Dentro de este pago se encuentra
              incluida la remuneración de los descansos dominicales y festivos
              de que tratan los capítulos I y II del título VII del Cogido
              Sustantivo del Trabajo. Se aclara y se conviene que en los casos
              en los que el trabajador devengue comisiones o cualquier otra
              modalidad de salario variable, el 82.5 % de dichos ingresos,
              constituye remuneración ordinaria, y el 17.5 % restante está
              destinado a remunerar el descanso en los días dominicales y
              festivos de que tratan los capítulos I y II del título VII del
              Código Sustantivo del Trabajo. PARAGRAFO: Las partes expresamente
              acuerdan que lo que reciba el trabajador o llegue a recibir en el
              futuro, adicional a su salario ordinario, ya sean beneficios o
              auxilios habituales u ocasionales, tales como: alimentación,
              habitación o vestuario, bonificaciones ocasionales o cualquier
              otra que reciba, durante la vigencia del contrato de trabajo, en
              dinero o en especie, no constituye salario. QUINTA.- Todo trabajo
              suplementario o en horas extras y todo trabajo en día domingo o
              festivo en los que legalmente debe concederse descanso, se
              remunerará conforme a la ley, así como los correspondientes
              recargos nocturnos. Para el reconocimiento y pago del trabajo
              suplementario, dominical o festivo el empleador o sus
              representantes deben autorizarlo previamente por escrito. Cuando
              la necesidad de este trabajo se presente de manera imprevista o
              inaplazable, deberá ejecutarse y darse cuenta de él por escrito, a
              la mayor brevedad, al empleador o a sus representantes. El
              empleador, en consecuencia, no reconocerá ningún trabajo
              suplementario o en día de descanso legalmente obligatorio que no
              haya sido autorizado previamente o avisado inmediatamente, como
              queda dicho. SEXTA.- El trabajador se obliga a laborar la jornada
              ordinaria en los turnos y dentro de las horas señaladas por el
              empleador, pudiendo hacer éste ajustes o cambios de horario cuando
              lo estime conveniente. Por el acuerdo expreso o tácito de las
              partes, podrán repartirse las horas de la jornada ordinaria en la
              forma prevista en el artículo 164 del Código Sustantivo del
              Trabajo, modificado por el artículo 23 de la Ley 50 de 1990,
              teniendo en cuenta que los tiempos de descanso ente las secciones
              de la jornada no se computan dentro de la misma, según el artículo
              167 ibídem. Así mismo el empleador y el trabajador podrán acordar
              que la jornada semanal de cuarenta y ocho (48) horas se realice
              mediante jornadas diarias flexibles de trabajo, distribuidas en
              máximo seis (6) días a la semana con un (1) días de descanso
              obligatorio, que podrá coincidir con el domingo. En éste, el
              número de horas de trabajo diario podrá repartirse de manera
              variable durante la respectiva semana y podrá ser de mínimo cuatro
              (4) horas continuas y hasta diez (10) horas diarias sin lugar a
              ningún recargo por trabajo suplementario, cuando el número de
              horas de trabajo no exceda el promedio de cuarenta y ocho (48)
              horas semanales dentro de la jornada ordinaria de 6:00 am a 10:00
              pm. Articulo 161 del código Sustantivo del Trabajo literal d)
              Adicionado por el articulo 51 de la ley 789 de 2002 SEPTIMA.- Las
              partes acuerdan un periodo de prueba de sesenta (60) días que no
              es superior a la quinta parte del término inicial de este
              contrato, ni excede de dos meses. En caso de prórrogas o nuevo
              contrato entre las partes se entenderá que no hay nuevo período de
              prueba. Durante este período tanto el empleador como el trabajador
              podrán terminar el contrato en cualquier momento, en forma
              unilateral, de conformidad con el artículo 80 del Código
              Sustantivo del Trabajo. OCTAVA.- La duración del presente contrato
              es la establecida en este documento. No obstante, si antes de la
              fecha de vencimiento del término estipulado, ninguna de las partes
              avisare por escrito a la otra su determinación de no prorrogar el
              contrato, con una antelación no inferior a treinta (30) días, éste
              se entenderá renovado por un período igual al inicialmente pactado
              y así sucesivamente. NOVENA.- Son justa causas para dar por
              terminado unilateralmente este contrato por cualquiera de las
              partes, las enumeradas en el articulo 62 del Código Sustantivo del
              Trabajo modificado por el artículo 7 del Decreto 2351 de 1965; y,
              además por parte del empleador, las faltas que para el efecto se
              califiquen como graves en el espacio reservado para cláusulas
              adicionales en el presente contrato y las establecidas en el
              Reglamento Interno de Trabajo. DECIMA.- Las partes podrán convenir
              que el trabajo se preste en lugar distinto del inicialmente
              contratado, siempre que tales traslados no desmejoren las
              condiciones laborales o de remuneración del trabajador, o
              impliquen perjuicios para él. Los gastos que se originen con el
              traslado serán cubiertos por el empleador de conformidad con el
              numeral 8 del artículo 57 del Código Sustantivo del Trabajo. El
              trabajador se obliga a aceptar los cambios de oficio que decida el
              empleador dentro de su poder subordinante, siempre que se respeten
              las condiciones laborales del trabajador y no se le causen
              perjuicios. Todo ello sin que se afecten el honor, la dignidad y
              los derechos mínimos del trabajador, de conformidad con el
              artículo 23 literal b del Código Sustantivo del Trabajo,
              modificado por el artículo 1 de la ley 50 de 1990. DECIMA
              PRIMERA.- Este contrato ha sido redactado estrictamente de acuerdo
              con la ley y la jurisprudencia y será interpretado de buena fe y
              en consonancia con el Código Sustantivo del Trabajo cuyo objeto,
              definido en su artículo 1º, es logar la justicia en las relaciones
              entre EMPLEADORES Y TRABAJADORES dentro de un espíritu de
              coordinación económica y equilibrio social. DECIMA SEGUNDA.- El
              presente contrato remplaza en su integridad y deja sin efecto
              alguno cualquiera otro contrato verbal o escrito celebrado entre
              las partes con anterioridad. Las modificaciones que se acuerden al
              presente contrato se anotarán a continuación de su texto. Para
              constancia se firma en dos ejemplares del mismo tenor y valor,
              ante testigos en la ciudad de Popayán, Departamento del Cauca, a
              los (01) días del mes de Enero de Dos Mil Veinte (2020).
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUIS ARMANDO ORTIZ ARGOTE</Text>
            <Text>{data.nombreEmpleado}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>REPRESENTANTE LEGAL</Text>
            <Text>1061798713 {data.lugarExpedicion}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FUNDACION GIMNASIO MODERNO DEL CAUCA</Text>
            <Text>EMPLEADO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>C.C.Nª 12.957.715 DE PASTO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>EMPLEADOR</Text>
          </View>
          <View style={styles.section}>
            <Text>TESTIGOS</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>---------------------------------</Text>
            <Text>---------------------------------</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>C.C.Nº</Text>
            <Text>C.C.Nº</Text>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8 mb-5"
        onClick={() => {
          handleChangeScreen((prevState) => ({
            ...prevState,
            view: 0,
          }));
        }}
      />

      <section className="mb-10">
        <BlobProvider document={documentToViewAndDownload()} tw="#1">
          {({ url, loading, error }) => {
            if (loading) {
              return <span>Generando documento...</span>;
            }
            if (!loading && url) {
              return (
                <a href={url} download>
                  <Button variant="contained" className="mt-5">
                    Descargar contrato
                  </Button>
                </a>
              );
            }
            if (error) {
              console.error(error);
              return <p>An error occurred</p>;
            }
            return null;
          }}
        </BlobProvider>
      </section>

      <section>{documentToViewAndDownload()}</section>
    </>
  );
};

PdfView.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.object.isRequired,
};

export default PdfView;
