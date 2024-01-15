/* eslint-disable tailwindcss/migration-from-tailwind-2 */

interface Props {
    text: string;
}

export const MyMessage = ({ text }: Props) => {
    return (
        <div className="col-start-6 col-end-13 rounded-lg p-3">
            <div className="flex flex-row-reverse items-center justify-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    L
                </div>
                <div className="relative mr-3 rounded-xl bg-indigo-700 px-4 py-2 text-sm shadow">
                    {text}
                </div>
            </div>
        </div>
    );
};
