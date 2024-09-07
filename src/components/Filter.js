import '../css/App.css';
import {Autocomplete, Card, CardContent, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {getAllCompanies, getAllTags, getCompaniesByTags, getCompanyDetails} from "../js-utils/companyUtils";
import {useContext} from "react";
import {CompaniesContext} from "./Home";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function getTagRenderContent(allTags) {
    const renderContent = [];
    allTags.forEach(tag => {
        renderContent.push({
            label: tag,
            value: tag
        })
    })
    return renderContent;
}

function getCompaniesRenderContent(allCompanies) {
    const renderContent = [];
    allCompanies.forEach((value, key) => {
        renderContent.push({
            label: value.name,
            value: key
        })
    })
    return renderContent;
}

function Filter() {
    const data = useContext(CompaniesContext);
    const allCompanies = getAllCompanies();
    const handleCompanySelection = (event, selectedValue) => {
        if(selectedValue !== null) {
            const companyDetails = getCompanyDetails(selectedValue.value);
            data.setCompanies([companyDetails]);
        }
        else {
            data.setCompanies(allCompanies);
        }
    };

    const handleTagsSelection = (event, selectedValue) => {

        if(selectedValue.length > 0) {
            const selectedTags = [];
            selectedValue.forEach((value, key) => {
                //console.log(key);
                //console.log(value);
                selectedTags.push(value.value);
            });
            data.setCompanies(getCompaniesByTags(selectedTags));
        }
        else {
            data.setCompanies(allCompanies);
        }
    };

    const tagRenderContent = getTagRenderContent(getAllTags());
    const companiesRenderContent = getCompaniesRenderContent(getAllCompanies());
    return (
        <div>
            <Card >
                <CardContent>
                    <Autocomplete
                        className={"filterSelectors"}
                        disablePortal
                        id="all-companies"
                        options={companiesRenderContent}
                        sx={{ width: 300 }}
                        onChange={handleCompanySelection}
                        renderInput={
                            (params) =>
                                <TextField {...params} label="Search Brand" />
                        }
                    />

                    <Autocomplete
                        className={"filterSelectors"}
                        multiple
                        id="all-tags"
                        options={tagRenderContent}
                        disableCloseOnSelect
                        onChange={handleTagsSelection}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option, { selected }) => {
                            const { key, ...optionProps } = props;
                            return (
                                <li key={key} {...optionProps}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.label}
                                </li>
                            );
                        }}
                        style={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Select Tags" placeholder="Select Tags" />
                        )}
                    />

                </CardContent>
            </Card>
        </div>

    );
}

export default Filter;
