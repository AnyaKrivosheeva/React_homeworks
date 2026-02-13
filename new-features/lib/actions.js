'use server';

import { saveToDB } from "./db";
import { revalidatePath } from "next/cache";

export async function addComment(formData) {  // action функция которая будет выполняться на сервере

    const text = formData.get('text');   //собираем данные из формы(текст комментария)

    await saveToDB(text);    // сохраняем в базу

    revalidatePath("/");
}