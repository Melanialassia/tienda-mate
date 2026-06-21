import { z } from "zod";

export const franchiseSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  phone: z.string().min(8, "Ingresá un teléfono válido"),
  city: z.string().min(2, "La ciudad es requerida"),
  investment: z.string().min(1, "Seleccioná una opción"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type FranchiseFormValues = z.infer<typeof franchiseSchema>;
