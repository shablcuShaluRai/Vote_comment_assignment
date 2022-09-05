import NumberWithImage from "./NumberWithImage";
export default function Buttons({
  handleClick,
  name,
  classNames,
  value,
  isRequired
}) {
  return (
    <div
      className={isRequired ? classNames : `select bubble ${name}`}
      onClick={() => {
        if (isRequired) handleClick();
      }}
    >
      <div className="selected">
        {value ? (
          name === "enneagram" ? (
            <NumberWithImage list={value} />
          ) : (
            value
          )
        ) : (
          name
        )}
      </div>
    </div>
  );
}
