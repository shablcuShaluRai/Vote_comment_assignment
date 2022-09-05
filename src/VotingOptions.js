import Select from "./Select";

export default function VotingOptions({
  votingOptions,
  mapDropDownListToName,
  allSelectedOptions,
  handleChange
}) {
  return (
    <div className="voting-container">
      {votingOptions?.map((voting, index) => {
        return (
          <Select
            key={index.toString()}
            value={allSelectedOptions[voting.name]}
            selectOptions={mapDropDownListToName[voting.name]}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}
