# TOKEN=tokengoeshere TEXT=textgoeshere sh curl-scripts/examples/create.sh

curl "https://fast-dawn-51329.herokuapp.com/recipes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
