export interface Credentials {
    idPublico: string;
    idPrivado: string;
    passwordHash: string;
}

export interface Contact {
    tokenCuartaCredencial: string;
    insecure: boolean;
}

export interface ContactMap {
    [key: string]: Contact;
}

export interface Message {
    id?: number;
    msgId: string;
    chatId: string;
    de: string;
    msg: string;
    time: number;
    status: 'saved' | 'sent' | 'read';
    secure: boolean;
}

export interface RequestRecord {
    idPublico: string;
    time: number;
}

export type TipoPaquete = 
    | 'IDENTITY_PROBE' 
    | 'IDENTITY_MATCH' 
    | 'IDENTITY_CONFLICT' 
    | 'SECURITY_ALERT' 
    | 'CONNECTION_REQ' 
    | 'CONNECTION_ACCEPTED' 
    | 'HANDSHAKE_START' 
    | 'HANDSHAKE_FINAL' 
    | 'MSG' 
    | 'MSG_ACK' 
    | 'SYNC_REQUEST' 
    | 'SYNC_DATA';

export interface IPaqueteBase {
    tipo: TipoPaquete;
    miIdPublico?: string;
    deIdPublico?: string;
}

export interface IPaqueteIdentityProbe extends IPaqueteBase {
    tipo: 'IDENTITY_PROBE';
    deIdPublico: string;
    cuarta: string;
}

export interface IPaqueteSecurityAlert extends IPaqueteBase {
    tipo: 'SECURITY_ALERT';
    idComprometido: string;
}

export interface IPaqueteConnectionReq extends IPaqueteBase {
    tipo: 'CONNECTION_REQ';
    deIdPublico: string;
}

export interface IPaqueteHandshakeStart extends IPaqueteBase {
    tipo: 'HANDSHAKE_START';
    miIdPublico: string;
    cuartaCredencial: string;
}

export interface IPaqueteHandshakeFinal extends IPaqueteBase {
    tipo: 'HANDSHAKE_FINAL';
    miIdPublico: string;
    cuartaCredencialAmigo: string;
}

export interface IPaqueteMsg extends IPaqueteBase {
    tipo: 'MSG';
    msgId: string;
    miIdPublico: string;
    txt: string;
    time: number;
    channel?: string;
}

export interface IPaqueteMsgAck extends IPaqueteBase {
    tipo: 'MSG_ACK';
    msgId: string;
    read: boolean;
}

export interface IPaqueteSyncRequest extends IPaqueteBase {
    tipo: 'SYNC_REQUEST';
    cuarta: string;
}

export interface IPaqueteSyncData extends IPaqueteBase {
    tipo: 'SYNC_DATA';
    contactos: ContactMap;
    mensajes: Message[];
}

export interface IPaqueteIdentityMatch extends IPaqueteBase {
    tipo: 'IDENTITY_MATCH';
}

export interface IPaqueteIdentityConflict extends IPaqueteBase {
    tipo: 'IDENTITY_CONFLICT';
}

export interface IPaqueteConnectionAccepted extends IPaqueteBase {
    tipo: 'CONNECTION_ACCEPTED';
}

export type IPaqueteData = 
    | IPaqueteIdentityProbe 
    | IPaqueteIdentityMatch
    | IPaqueteIdentityConflict
    | IPaqueteSecurityAlert 
    | IPaqueteConnectionReq 
    | IPaqueteConnectionAccepted
    | IPaqueteHandshakeStart 
    | IPaqueteHandshakeFinal 
    | IPaqueteMsg 
    | IPaqueteMsgAck 
    | IPaqueteSyncRequest 
    | IPaqueteSyncData;