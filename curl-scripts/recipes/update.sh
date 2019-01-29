# ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "https://fast-dawn-51329.herokuapp.com/examples/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'
