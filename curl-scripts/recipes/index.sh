# TOKEN=tokengoeshere sh curl-scripts/examples/index.sh

curl "https://fast-dawn-51329.herokuapp.com/examples" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
