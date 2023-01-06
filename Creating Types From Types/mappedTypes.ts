// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>; // { darkMode: boolean; newUserProfile: boolean; }
// The mapped type above is equivalent to the following interface:
interface FeatureOptions2 {
  darkMode: boolean;
  newUserProfile: boolean;
}

//  MAPPER TYPES-----------------------------
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// UnlockedAccount is { id: string; name: string; }//not readonly
