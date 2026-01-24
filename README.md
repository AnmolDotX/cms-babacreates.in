# Studio(CMS) Babacreates

This project uses **Sanity** to manage the content for the portfolio. It serves as both the database and the content dashboard for the application.

## Integration

- **Frontend Repository**: [GITHUB_BABACREATES.IN](https://github.com/AnmolDotX/babacreates)

## Workflow

Changes to the schema or studio configuration can be updated directly from the local CLI. Run the following command to deploy changes:

```bash
npx sanity deploy
```

## Schema Management & Data Safety

The Studio schemas are defined in `schemaTypes/`. To ensure you don't lose data when making changes:

### Safe Changes (Data Preserved)

These changes are generally safe and don't affect existing data:

1. **Adding new fields**: New fields will appear empty for existing documents.
2. **Adding new options**: Adding items to dropdown/radio lists.
3. **Changing presentation**: Changing titles, descriptions, or previews.
4. **Validation changes**: Strengthening validation might make some existing documents "invalid" (showing warnings), but won't delete data.

### Potentially Destructive Changes (Caution!)

1. **Renaming fields**: If you rename a field (e.g., changing `jobTitle` to `role`), Sanity sees this as **adding** `role` and **hiding** `jobTitle`.
   - **Result**: The old data is still in the database (JSON) but invisible in the Studio.
   - **Fix**: You need to run a migration script (using Sanity CLI) to move data from the old field name to the new one.
2. **Changing Field Types**: Changing a field from `string` to `number` or `object` will cause the Studio to break or hide the content for that field.
   - **Result**: Data mismatch errors or hidden data.
   - **Fix**: Use migration scripts to transform the data structure before deploying the schema change.
3. **Removing Fields**: Removing a field definition hides it from the Studio, but the data remains in the documents.
   - **Cleanup**: To actually delete the data to save space, you must unset it via script.

### Workflow for Field Renaming/Refactoring

1. **Backup**: Run `sanity dataset export` to backup your current dataset.
2. **Update Schema**: Add the new field definition to your schema.
3. **Migrate**: structure a migration script to copy value from `oldField` to `newField` and then `unset(oldField)`.
4. **Deploy**: Deploy the new schema with `sanity deploy`.

Never deploy a schema change that changes a field's `type` or `name` without prepared migration steps if preserving that specific field's data is critical.
