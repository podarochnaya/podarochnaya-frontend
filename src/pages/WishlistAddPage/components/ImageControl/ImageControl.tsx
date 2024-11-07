import { Button, Image, Input } from '@nextui-org/react';
import { useState } from 'react';
import { TrashIcon } from '../../../../shared/components/icons/TrashIcon/TrashIcon.tsx';

interface Props {
    onChange: (
        fileName: string | null,
        fileContent: string | null,
        contentType: string | null,
    ) => void;
}

export const ImageControl = ({ onChange }: Props) => {
    const [file, setFile] = useState<string>();
    const [imageLink, setImageLink] = useState<string>();
    const handleChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        if (reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                setFile(file);
                setImageLink(URL.createObjectURL(file));
                onChange(
                    file.name,
                    reader.result ? reader.result.toString() : null,
                    file.type,
                );
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        onChange(null, null, null);
        setFile(undefined);
        setImageLink(undefined);
    };

    return (
        <div className="flex pl-2 justify-between ">
            <p className="text-small">Картинка</p>
            <div className="relative">
                {!Boolean(file) ? (
                    <Input
                        classNames={{
                            base: 'flex flex-row justify-between items-between',
                            inputWrapper: 'max-w-96 w-96',
                        }}
                        accept=".jpef, .png, .jpg"
                        onChange={handleChange}
                        type="file"
                        placeholder="Описание"
                    />
                ) : (
                    <>
                        <Button
                            isIconOnly
                            size="sm"
                            variant="shadow"
                            radius="full"
                            className="absolute z-20 right-2 top-2"
                            color="default"
                            onClick={removeImage}
                        >
                            <TrashIcon width="25px" />
                        </Button>
                        <Image
                            src={imageLink}
                            width="250px"
                            height="200px"
                            radius="lg"
                        ></Image>
                    </>
                )}
            </div>
        </div>
    );
};
