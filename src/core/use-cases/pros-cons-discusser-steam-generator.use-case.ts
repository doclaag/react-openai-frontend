export async function* prosConsDiscusserStreamGeneratorUseCase(
  prompt: string,
  abortSignal: AbortSignal
) {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        signal: abortSignal,
      }
    );

    if (!resp.ok) throw new Error("No se pudo realizar la comparación");

    const reader = resp.body?.getReader();

    if (!reader) {
      console.log("No se pudo realizar la comparación");
      return null;
    }

    const decoder = new TextDecoder();

    let text = "";

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const decodedChunk = decoder.decode(value, { stream: true });
      text += decodedChunk;
      // console.log(text);
      yield text;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
