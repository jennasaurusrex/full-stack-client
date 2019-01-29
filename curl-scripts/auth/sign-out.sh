# TOKEN=<token> sh curl-scripts/sign-out.sh

curl "https://fast-dawn-51329.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
