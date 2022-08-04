# frozen_string_literal: true

class Shared::Resources < Bridgetown::Component
  def initialize(data:, metadata:, resource:)
    @data, @metadata, @resource = data, metadata, resource
  end
end
