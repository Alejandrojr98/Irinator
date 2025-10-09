package com.cursoceat.irinator.modell;

import jakarta.persistence.*;

@Entity
@Table(name="personas")
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_persona")
    private int idPersona;
    private String nombre;
    private boolean septum;
    private boolean gafas;
    private boolean energia;
    private boolean cafe;
    private boolean alto;
    private boolean tatuajes;
    private boolean nacer;
    private boolean bolso;
    private boolean tomelloso;
    private boolean arregla;
    private boolean comenta;
    private boolean fuerza;
    private boolean feliz;
    private boolean cTodo;
    private boolean metePata;
    private boolean dormido;
    private boolean respTodo;
    private boolean calla;
    private boolean ocupado;
    private boolean observa;
    private boolean pideDes;
    private boolean tarde;
    private boolean random;
    private boolean bocadillo;
    private boolean hardcore;
    private boolean gato;
    private boolean planchar;
    private boolean trabajo;
    private boolean descansos;
    private boolean zapatillas;
    private boolean azucar;
    private boolean militar;
    private boolean sueldo;
    private boolean fumar;
    private boolean clase;
    private boolean codigo;
    private boolean coche;
    private boolean trauma;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "id_img", referencedColumnName = "id_imagen")
    private Imagen imagen;

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isSeptum() {
        return septum;
    }

    public void setSeptum(boolean septum) {
        this.septum = septum;
    }

    public boolean isGafas() {
        return gafas;
    }

    public void setGafas(boolean gafas) {
        this.gafas = gafas;
    }

    public boolean isEnergia() {
        return energia;
    }

    public void setEnergia(boolean energia) {
        this.energia = energia;
    }

    public boolean isCafe() {
        return cafe;
    }

    public void setCafe(boolean cafe) {
        this.cafe = cafe;
    }

    public boolean isAlto() {
        return alto;
    }

    public void setAlto(boolean alto) {
        this.alto = alto;
    }

    public boolean isTatuajes() {
        return tatuajes;
    }

    public void setTatuajes(boolean tatuajes) {
        this.tatuajes = tatuajes;
    }

    public boolean isNacer() {
        return nacer;
    }

    public void setNacer(boolean nacer) {
        this.nacer = nacer;
    }

    public boolean isBolso() {
        return bolso;
    }

    public void setBolso(boolean bolso) {
        this.bolso = bolso;
    }

    public boolean isTomelloso() {
        return tomelloso;
    }

    public void setTomelloso(boolean tomelloso) {
        this.tomelloso = tomelloso;
    }

    public boolean isArregla() {
        return arregla;
    }

    public void setArregla(boolean arregla) {
        this.arregla = arregla;
    }

    public boolean isComenta() {
        return comenta;
    }

    public void setComenta(boolean comenta) {
        this.comenta = comenta;
    }

    public boolean isFuerza() {
        return fuerza;
    }

    public void setFuerza(boolean fuerza) {
        this.fuerza = fuerza;
    }

    public boolean isFeliz() {
        return feliz;
    }

    public void setFeliz(boolean feliz) {
        this.feliz = feliz;
    }

    public boolean iscTodo() {
        return cTodo;
    }

    public void setcTodo(boolean cTodo) {
        this.cTodo = cTodo;
    }

    public boolean isMetePata() {
        return metePata;
    }

    public void setMetePata(boolean metePata) {
        this.metePata = metePata;
    }

    public boolean isDormido() {
        return dormido;
    }

    public void setDormido(boolean dormido) {
        this.dormido = dormido;
    }

    public boolean isRespTodo() {
        return respTodo;
    }

    public void setRespTodo(boolean respTodo) {
        this.respTodo = respTodo;
    }

    public boolean isCalla() {
        return calla;
    }

    public void setCalla(boolean calla) {
        this.calla = calla;
    }

    public boolean isOcupado() {
        return ocupado;
    }

    public void setOcupado(boolean ocupado) {
        this.ocupado = ocupado;
    }

    public boolean isObserva() {
        return observa;
    }

    public void setObserva(boolean observa) {
        this.observa = observa;
    }

    public boolean isPideDes() {
        return pideDes;
    }

    public void setPideDes(boolean pideDes) {
        this.pideDes = pideDes;
    }

    public boolean isTarde() {
        return tarde;
    }

    public void setTarde(boolean tarde) {
        this.tarde = tarde;
    }

    public boolean isRandom() {
        return random;
    }

    public void setRandom(boolean random) {
        this.random = random;
    }

    public boolean isBocadillo() {
        return bocadillo;
    }

    public void setBocadillo(boolean bocadillo) {
        this.bocadillo = bocadillo;
    }

    public boolean isHardcore() {
        return hardcore;
    }

    public void setHardcore(boolean hardcore) {
        this.hardcore = hardcore;
    }

    public boolean isGato() {
        return gato;
    }

    public void setGato(boolean gato) {
        this.gato = gato;
    }

    public boolean isPlanchar() {
        return planchar;
    }

    public void setPlanchar(boolean planchar) {
        this.planchar = planchar;
    }

    public boolean isTrabajo() {
        return trabajo;
    }

    public void setTrabajo(boolean trabajo) {
        this.trabajo = trabajo;
    }

    public boolean isDescansos() {
        return descansos;
    }

    public void setDescansos(boolean descansos) {
        this.descansos = descansos;
    }

    public boolean isZapatillas() {
        return zapatillas;
    }

    public void setZapatillas(boolean zapatillas) {
        this.zapatillas = zapatillas;
    }

    public boolean isAzucar() {
        return azucar;
    }

    public void setAzucar(boolean azucar) {
        this.azucar = azucar;
    }

    public boolean isMilitar() {
        return militar;
    }

    public void setMilitar(boolean militar) {
        this.militar = militar;
    }

    public boolean isSueldo() {
        return sueldo;
    }

    public void setSueldo(boolean sueldo) {
        this.sueldo = sueldo;
    }

    public boolean isFumar() {
        return fumar;
    }

    public void setFumar(boolean fumar) {
        this.fumar = fumar;
    }

    public boolean isClase() {
        return clase;
    }

    public void setClase(boolean clase) {
        this.clase = clase;
    }

    public boolean isCodigo() {
        return codigo;
    }

    public void setCodigo(boolean codigo) {
        this.codigo = codigo;
    }

    public boolean isCoche() {
        return coche;
    }

    public void setCoche(boolean coche) {
        this.coche = coche;
    }

    public boolean isTrauma() {
        return trauma;
    }

    public void setTrauma(boolean trauma) {
        this.trauma = trauma;
    }

    public Imagen getImagen() {
        return imagen;
    }

    public void setImagen(Imagen imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "idPersona=" + idPersona +
                ", nombre='" + nombre + '\'' +
                ", septum=" + septum +
                ", gafas=" + gafas +
                ", energia=" + energia +
                ", cafe=" + cafe +
                ", alto=" + alto +
                ", tatuajes=" + tatuajes +
                ", nacer=" + nacer +
                ", bolso=" + bolso +
                ", tomelloso=" + tomelloso +
                ", arregla=" + arregla +
                ", comenta=" + comenta +
                ", fuerza=" + fuerza +
                ", feliz=" + feliz +
                ", cTodo=" + cTodo +
                ", metePata=" + metePata +
                ", dormido=" + dormido +
                ", respTodo=" + respTodo +
                ", calla=" + calla +
                ", ocupado=" + ocupado +
                ", observa=" + observa +
                ", pideDes=" + pideDes +
                ", tarde=" + tarde +
                ", random=" + random +
                ", bocadillo=" + bocadillo +
                ", hardcore=" + hardcore +
                ", gato=" + gato +
                ", planchar=" + planchar +
                ", trabajo=" + trabajo +
                ", descansos=" + descansos +
                ", zapatillas=" + zapatillas +
                ", azucar=" + azucar +
                ", militar=" + militar +
                ", sueldo=" + sueldo +
                ", fumar=" + fumar +
                ", clase=" + clase +
                ", codigo=" + codigo +
                ", coche=" + coche +
                ", trauma=" + trauma +
                ", imagen=" + imagen +
                '}';
    }
}
