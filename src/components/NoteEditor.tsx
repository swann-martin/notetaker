import { useState } from "react";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import CodeMirror from "@uiw/react-codemirror";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input
            className="input-primary input input-lg w-full font-bold"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          width="500px"
          height="30vh"
          minHeight="30vh"
          minWidth="100%"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          className="border border-gray-300"
          onChange={(value) => setCode(value)}
        />
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn-primary btn"
          disabled={title.trim().length === 0 || code.trim().length === 0}
          onClick={() => {
            onSave({ title, content: code });
            setCode("");
            setTitle("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
