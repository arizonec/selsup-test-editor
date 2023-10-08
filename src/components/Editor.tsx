import { FC, useState } from "react";
import './Editor.css'

type Param = {
    id: number;
    name: string;
    type: string;
}

type ParamValue = {
    paramId: number;
    value: string;
}

type Color = {
    color: string;
}

type Model = {
    paramValues: ParamValue[];
    colors: Color[];
}

type Props = {
    params: Param[];
    model: Model;
}

export const Editor: FC<Props> = ({ params, model }) => {
    const [editedModel, setEditedModel] = useState<Model>(model);
    const [showModel, setShowModel] = useState<Model | null>(null);

    const handleChange = (id: number, value: string) => {
        const getAllItems = [...editedModel.paramValues];
        const itemIndex = editedModel.paramValues.findIndex((paramValue) => paramValue.paramId === id);
        getAllItems[itemIndex].value = value;
        setEditedModel((prevState) => ({
            ...prevState,
            paramValues: getAllItems,
        }));
    }

    const getModel = () => {
        setShowModel(editedModel);
    };

    return (
        <div>

            {params.map((param) => {
                const paramValue = editedModel.paramValues.find((paramValue) => paramValue.paramId === param.id);
                return (
                    <div key={param.id} className="editor-element">
                        <label className="editor-label">{param?.name}</label>
                        <input
                            className="editor-input"
                            value={paramValue?.value || ''}
                            onChange={(e) => handleChange(param.id, e.target.value)}
                        />
                    </div>
                );
            })}
            <button className="show-btn" onClick={getModel}>Вывести измененные данные!</button>
            <div className="show-place">
                {showModel && showModel.paramValues.map(item => (
                    <div key={item.paramId}>{item.value}</div>
                ))}
            </div>
        </div>
    );
};