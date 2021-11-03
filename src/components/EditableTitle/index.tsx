import { useState } from 'react';
import { TitleInput } from './styles';

interface EditableTitleProps {
  size?: number
  title: string
  centered?: boolean
  onChangeTitle: (title: string) => void
}

export const EditableTitle = ({
  centered, title, onChangeTitle, size = 24,
}: EditableTitleProps): JSX.Element => {
  const [canEdit, setCanEdit] = useState(false);

  return (
    <TitleInput
      size={size}
      centered={!!centered}
      value={title}
      onChange={(e) => onChangeTitle(e.target.value)}
      onDoubleClick={() => setCanEdit(true)}
      onBlur={() => setCanEdit(false)}
      readOnly={!canEdit}
    />
  );
};
