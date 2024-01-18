/* eslint-disable tailwindcss/migration-from-tailwind-2 */

interface Props {
    userScore: number;
    errors: string[];
    message: string;
}

export const GptOrthographyMessage = ({ userScore, errors, message }: Props) => {
    return (
        <div className="col-start-1 col-end-8 rounded-lg p-3">
            <div className="flex flex-row items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
                    G
                </div>
                <div className="relative ml-3 rounded-xl bg-black bg-opacity-25 px-4 pt-3 text-sm shadow">
                    <h3 className="text-3xl">Puntaje: {userScore}</h3>
                    <p>{message}</p>
                    {
                        (errors.length === 0)
                            ? (<p>No se encontraron errores, ¡perfecto!</p>)
                            : (
                                <>
                                    <h3 className="text-2xl">Errores encontrados</h3>
                                    <ul>
                                        {
                                            errors.map((error, i) => (
                                                <li key={i}>
                                                    {error}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    );
};
