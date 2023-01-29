import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Language } from '../../common/types';
import { useAppContext } from '../../context/AppContext';

const LanguageSelect = () => {
  const { language, setLanguage } = useAppContext();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          onChange={handleChange}
          label="Language"
        >
          {Object.values(Language).map((language) => (
            <MenuItem key={language} value={language.toLowerCase()}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default LanguageSelect;
