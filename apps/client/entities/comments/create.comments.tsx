
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateComments(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="content" variant="outlined" validate={required()}  />
<ReferenceInput label="posts" source="postsid" reference="posts">
        <AutocompleteInput variant="outlined" /* optionText="posts"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
