import { defineType, defineField } from 'sanity'

/**
 * Esquema de datos (Schema) para los Repuestos de Motocicletas.
 * Define la estructura y validaciones del formulario en el panel de Sanity.
 */
export default defineType({
  name: 'producto',
  title: 'Repuestos de Motos',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre del Repuesto',
      type: 'string',
      validation: (Rule) => Rule.required().error('El nombre es obligatorio.')
    }),
    defineField({
      name: 'slug',
      title: 'Identificador URL (Slug)',
      type: 'slug',
      description: 'Haz clic en "Generate" para crear la URL amigable basada en el nombre.',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('El identificador URL es obligatorio.')
    }),
    defineField({
      name: 'imagen',
      title: 'Foto del Repuesto',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar y enfocar la imagen desde el panel
      },
      validation: (Rule) => Rule.required().error('La imagen del repuesto es obligatoria.')
    }),
    defineField({
      name: 'precio',
      title: 'Precio (COP)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('El precio debe ser un número positivo.')
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Motor', value: 'motor' },
          { title: 'Frenos', value: 'frenos' },
          { title: 'Transmisión / Arrastre', value: 'transmision' },
          { title: 'Suspensión', value: 'suspension' },
          { title: 'Eléctrico / Luces', value: 'electrico' },
          { title: 'Lujos & Accesorios', value: 'lujos' },
          { title: 'Aceites & Líquidos', value: 'aceites' },
        ],
      },
      validation: (Rule) => Rule.required().error('Debes seleccionar una categoría.')
    }),
    defineField({
      name: 'compatibilidad',
      title: 'Motos Compatibles',
      type: 'array',
      description: 'Modelos exactos (Ej: AKT NKD 125, Pulsar NS 200).',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'descripcion',
      title: 'Ficha Técnica / Descripción',
      type: 'text',
      description: 'Detalles sobre la marca, material o especificaciones adicionales del repuesto.'
    })
  ]
})
