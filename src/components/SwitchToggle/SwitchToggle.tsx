import styles from "./SwitchToggle.module.css";

interface SwitchToggleProps {
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({ id, name, onChange, checked }) => {
  return (
    <div className={`${styles.toggle_switch} z-50`}>
      <input
        className={styles.toggle_input}
        id={id}
        type="radio"
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.toggle_label} htmlFor={id} />
    </div>
  );
};

export default SwitchToggle;