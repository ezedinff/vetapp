import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  withStyles,
  OutlinedTextFieldProps,
} from '@material-ui/core';
import { SelectOption } from '../types';
import { useEffect } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
interface Props extends Partial<OutlinedTextFieldProps> {
  label: string;
  name: string;
  example?: string;
  from: 'array' | 'remote';
  options?: SelectOption[];
  url?: string;
}
const Selector: React.FC<Props> = ({ from, options, url, ...rest }) => {
  useEffect(() => {
    if (from === 'remote') {
      // @Todo get options from remote using the provided url
    }
  }, [url, options]);
  console.log(rest);
  return (
    <TextInput select {...rest}>
      <MenuItem value={''} key="" disabled>
        <em>None</em>
      </MenuItem>
      {options
        ? options.map(opt => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))
        : null}
    </TextInput>
  );
};

export default React.memo(Selector);
