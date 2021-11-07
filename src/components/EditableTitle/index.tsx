import { useState } from 'react';
import { TitleInput } from './styles';

interface EditableTitleProps {
  size?: number
  title?: string
  editable?: boolean
  centered?: boolean
  onChangeTitle: (title: string) => void
  placeholder?: string
}

export const EditableTitle = ({
  centered, editable, title, placeholder, onChangeTitle, size = 24,
}: EditableTitleProps): JSX.Element => {
  const [canEdit, setCanEdit] = useState(false);

  return (
    <TitleInput
      size={size}
      centered={!!centered}
      placeholder={placeholder}
      value={title}
      onChange={(e) => onChangeTitle(e.target.value)}
      onDoubleClick={() => setCanEdit(true)}
      onBlur={() => setCanEdit(false)}
      readOnly={!canEdit && !!title && !editable}
    />
  );
};
