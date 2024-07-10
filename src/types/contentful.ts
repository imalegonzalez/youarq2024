// src/app/components/types.ts

export interface Categoria {
    fields: {
      nombreCategoria: string;
    };
  }
  
  export interface ImagenDestacada {
    fields: {
      file: {
        url: string;
      };
    };
  }
  
  export interface PostFields {
    nombreDeObra: string;
    descripcionCorta: string;
    imagenDestacada: ImagenDestacada;
    categoria: Categoria;
    tag: string;
    subtitle: string;
    obraDestacada: boolean;
    slug: string;
  }
  
  export interface Post {
    sys: {
      id: string;
    };
    fields: PostFields;
  }
  
  export interface CardObraProps {
    post: Post;
    width?: number;
    size?: "small" | "large";

  }

  export interface Foto {
    fields: {
      file: {
        url: string;
      };
    };
  }
  
  export interface Arquitecto {
    fields: {
      nombreArquitecto: string;
      fotoArquitecto: Foto;
    };
  }