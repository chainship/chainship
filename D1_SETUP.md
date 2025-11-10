# Cloudflare D1 Database Setup

## What is D1?
Cloudflare D1 is a serverless SQL database built on SQLite that runs at the edge. Perfect for your contact and quote forms!

## Step 1: Install Wrangler CLI (Cloudflare's CLI tool)

```bash
npm install -g wrangler
```

Or use it via npx (no global install needed):
```bash
npx wrangler --version
```

## Step 2: Login to Cloudflare

```bash
npx wrangler login
```

This will open a browser window to authenticate.

## Step 3: Create D1 Database

```bash
npx wrangler d1 create chainship-db
```

**Copy the output!** It will look like:
```
✅ Successfully created DB 'chainship-db'

[[d1_databases]]
binding = "DB"
database_name = "chainship-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

## Step 4: Run Database Schema

Execute the SQL schema to create tables:

```bash
npx wrangler d1 execute chainship-db --file=./schema.sql
```

Or remotely (once deployed):
```bash
npx wrangler d1 execute chainship-db --remote --file=./schema.sql
```

## Step 5: Configure Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Easier)

1. Go to your Cloudflare Pages project dashboard
2. Go to **Settings** → **Functions** → **D1 database bindings**
3. Click **Add binding**
4. Variable name: `DB`
5. D1 database: Select `chainship-db`
6. Save

### Option B: Via wrangler.toml (if using Wrangler for deployment)

Create `wrangler.toml` in your project root:
```toml
name = "chainship"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "chainship-db"
database_id = "your-database-id-from-step-3"
```

## Step 6: Deploy to Cloudflare Pages

```bash
git add .
git commit -m "Switched to Cloudflare D1"
git push
```

Cloudflare Pages will automatically deploy!

## Step 7: View Your Data

### Via Wrangler CLI:
```bash
# List all contacts
npx wrangler d1 execute chainship-db --command="SELECT * FROM contacts"

# List all quotes
npx wrangler d1 execute chainship-db --command="SELECT * FROM quotes"

# Count total submissions
npx wrangler d1 execute chainship-db --command="SELECT COUNT(*) FROM contacts"
```

### Via Cloudflare Dashboard:
1. Go to **Workers & Pages** → **D1**
2. Select `chainship-db`
3. Click **Console** tab
4. Run SQL queries directly in the browser!

## Benefits of D1:

✅ **Native Cloudflare** - No external dependencies
✅ **Edge Runtime** - Works perfectly with your setup
✅ **SQL Database** - Easy to query and manage
✅ **Free Tier** - 5M reads/day, 100K writes/day
✅ **Fast** - Runs at the edge, close to users
✅ **No Connection String** - No credentials to manage
✅ **Simple Queries** - Standard SQL syntax

## Example Queries:

```sql
-- Get all contacts from today
SELECT * FROM contacts 
WHERE DATE(created_at) = DATE('now');

-- Get pending quotes
SELECT * FROM quotes 
WHERE status = 'pending' 
ORDER BY created_at DESC;

-- Count submissions by day
SELECT DATE(created_at) as day, COUNT(*) as count 
FROM contacts 
GROUP BY DATE(created_at);
```

## Troubleshooting:

**Error: "env.DB is undefined"**
- Make sure you've added the D1 binding in Cloudflare Pages settings
- Binding name must be exactly `DB`

**Can't see data in dashboard:**
- Make sure you're using `--remote` flag when executing queries
- Check you're looking at the correct database
