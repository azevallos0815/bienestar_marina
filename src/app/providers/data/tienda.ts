import { Observable } from 'rxjs';


export interface Producto {
  producto_id: string;
  categoria_id: string;
  tienda_id: string;
  producto_nombre: string;
  producto_precio: string;
  producto_descripcion: string;
  producto_estado: string;
  fecha_registro: string;
  fecha_edicion: string;
  producto_tipo: string;
  producto_cambio: string;
  producto_terminos: string;
  producto_precio_min: string;
  producto_precio_real: string;
  producto_codigo: string;
  producto_pais: string;
  producto_peticiones: string;
  producto_view_peticion: string;
  producto_visibilidad: string;
  editable: string;
  cate2: string;
  pais_simbolo: string;
  pais_cambio: string;
  pais_nombre: string;
  rubro_id: string;
  tienda_razon: string;
  tienda_nombre: string;
  tienda_ruc: string;
  tienda_web: string;
  tienda_telefono: string;
  tienda_logo: string;
  tienda_estado: string;
  tienda_descripcion?: any;
  tienda_descripcion_breve: string;
  tienda_completar: string;
  tienda_puntos: string;
  tienda_nick: string;
  tienda_puntos_reserva: string;
  tienda_portada?: any;
  nivtie_id: string;
  tienda_codigo: string;
  invitado_id: string;
  tienda_animo?: any;
  tienda_count_visitas: string;
  tienda_peticion_ofertas: string;
  tienda_tipo: string;
  tienda_url_logo?: any;
  tienda_url_fb: string;
  tienda_direccion: string;
  tienda_estado_ayuda: string;
  tienda_flag: string;
  tienda_contrato: string;
  tienda_ciudad: string;
  tienda_metodo_pago: string;
  tienda_solodelivery: string;
  tienda_solo_corporativo?: any;
  tienda_solo_corporativo_tipo: string;
  tienda_soloonline: string;
  telefono_delivery: string;
  moneda: string;
  pim_url: string;
  producto_preciov: number;
  logo_tienda: string;
}

export interface Tienda {
  tienda_id: string;
  rubro_id: string;
  tienda_razon: string;
  tienda_nombre: string;
  tienda_ruc: string;
  tienda_web: string;
  tienda_telefono: string;
  tienda_logo: string;
  tienda_estado: string;
  tienda_descripcion?: any;
  tienda_descripcion_breve: string;
  tienda_completar: string;
  tienda_puntos: string;
  tienda_nick: string;
  tienda_puntos_reserva: string;
  tienda_portada?: any;
  nivtie_id: string;
  tienda_codigo: string;
  invitado_id: string;
  tienda_animo?: any;
  tienda_count_visitas: string;
  tienda_peticion_ofertas: string;
  tienda_tipo: string;
  tienda_url_logo?: any;
  tienda_url_fb: string;
  tienda_direccion: string;
  tienda_estado_ayuda: string;
  tienda_flag: string;
  tienda_contrato: string;
  tienda_ciudad: string;
  tienda_metodo_pago: string;
  tienda_solodelivery: string;
  tienda_solo_corporativo?: any;
  tienda_solo_corporativo_tipo: string;
  usuario_pais: string;
  pais_codigo: string;
  usuario_id: string;
  nivtie_titulo: string;
  nivtie_clase: string;
  rubro_position: string;
  direccion: string;
  seguidores: string;
  concatenacion_productos: string;
  n_ofertas: string;
  logo_tienda: string;
  productos: Producto[];
  temp: string;
}

export interface ServiceResponse {
  status: number;
  messages: string;
  data: Tienda[];
}

export abstract class TiendaData {
  abstract getServiceResponse(): Observable<ServiceResponse>;
}
