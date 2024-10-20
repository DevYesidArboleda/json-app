'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Translations = {
  en: {
    "home.title": "JSONPlaceholder Posts",
    "home.description": "Manage your posts with ease",
    "home.projectDescription": "This project demonstrates a simple CRUD application using Next.js and the JSONPlaceholder API. You can view, create, update, and delete posts.",
    "home.viewPosts": "View Posts",
    "home.createPost": "Create Post",
    "posts.title": "Posts",
    "posts.backToHome": "Back to Home",
    "posts.id": "ID",
    "posts.postTitle": "Title",
    "posts.actions": "Actions",
    "posts.update": "Update",
    "posts.delete": "Delete",
    "posts.previous": "Previous",
    "posts.next": "Next",
    "posts.page": "Page {currentPage} of {totalPages}",
    "posts.search": "Search by ID or Title",
    "createPost.title": "Create New Post",
    "createPost.backToHome": "Back to Home",
    "createPost.postTitle": "Post title",
    "createPost.postBody": "Post body",
    "createPost.create": "Create Post",
    "updatePost.title": "Update Post",
    "updatePost.cancel": "Cancel",
    "updatePost.update": "Update Post",
    "languageSwitch": "Switch to {lang}",
    "toasts.fetchError": "Failed to fetch posts. Please try again.",
    "toasts.deleteSuccess": "Post deleted successfully.",
    "toasts.deleteError": "Failed to delete post. Please try again.",
    "toasts.updateSuccess": "Post updated successfully.",
    "toasts.updateError": "Failed to update post. Please try again.",
    "toasts.createSuccess": "Post created successfully.",
    "toasts.createError": "Failed to create post. Please try again.",
    "footer.createdBy": "Created by Yesid Banguera",
    "footer.allRightsReserved": "All rights reserved"
  },
  es: {
    "home.title": "Publicaciones JSONPlaceholder",
    "home.description": "Gestiona tus publicaciones con facilidad",
    "home.projectDescription": "Este proyecto demuestra una aplicación CRUD simple utilizando Next.js y la API de JSONPlaceholder. Puedes ver, crear, actualizar y eliminar publicaciones.",
    "home.viewPosts": "Ver Post",
    "home.createPost": "Crear Post",
    "posts.title": "Publicaciones",
    "posts.backToHome": "Volver al Inicio",
    "posts.id": "ID",
    "posts.postTitle": "Título",
    "posts.actions": "Acciones",
    "posts.update": "Actualizar",
    "posts.delete": "Eliminar",
    "posts.previous": "Anterior",
    "posts.next": "Siguiente",
    "posts.page": "Página {currentPage} de {totalPages}",
    "posts.search": "Buscar por ID o Título",
    "createPost.title": "Crear Nueva Publicación",
    "createPost.backToHome": "Volver al Inicio",
    "createPost.postTitle": "Título de la publicación",
    "createPost.postBody": "Contenido de la publicación",
    "createPost.create": "Crear Publicación",
    "updatePost.title": "Actualizar Publicación",
    "updatePost.cancel": "Cancelar",
    "updatePost.update": "Actualizar Publicación",
    "languageSwitch": "Cambiar a {lang}",
    "toasts.fetchError": "Error al obtener las publicaciones. Por favor, inténtalo de nuevo.",
    "toasts.deleteSuccess": "Publicación eliminada con éxito.",
    "toasts.deleteError": "Error al eliminar la publicación. Por favor, inténtalo de nuevo.",
    "toasts.updateSuccess": "Publicación actualizada con éxito.",
    "toasts.updateError": "Error al actualizar la publicación. Por favor, inténtalo de nuevo.",
    "toasts.createSuccess": "Publicación creada con éxito.",
    "toasts.createError": "Error al crear la publicación. Por favor, inténtalo de nuevo.",
    "footer.createdBy": "Creado por Yesid Banguera",
    "footer.allRightsReserved": "Todos los derechos reservados"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}