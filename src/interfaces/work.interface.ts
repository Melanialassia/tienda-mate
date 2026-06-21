import { z } from "zod";

export const workSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  phone: z.string().min(8, "Ingresá un teléfono válido"),
  position: z.string().min(1, "Seleccioná una posición"),
  message: z.string().min(10, "Contanos algo sobre vos"),
});

export type WorkFormValues = z.infer<typeof workSchema>;
