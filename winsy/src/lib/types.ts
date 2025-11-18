interface Fields{
        Nombre: string,
    Email: string,
    Telefono:number,
    Mensaje:string
    Fecha: string
}

export interface Form {
    smtp_host: string,
    smtp_port:number,
    smtp_user:string,
    smtp_pass: string,
    smtp_secure: string,
    to:string,
    from_name:string,
    title:string,
    fields: Fields
}