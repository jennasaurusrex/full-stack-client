# TOKEN=tokengoeshere sh curl-scripts/examples/show.sh

curl "https://fast-dawn-51329.herokuapp.com/examples/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
