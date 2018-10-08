Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "index" => "top#index"
  get "company" => "top#company"
  get "contact" => "top#contact"
  get "join" => "top#join"
  get "service" => "top#service"
  get "consultant" => "top#consultant"
end

